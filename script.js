// List of valid IANA timezones
const validTimezones = Intl.supportedValuesOf('timeZone');

// Store active timezones
let activeTimezones = [];

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Load timezones from localStorage
    const saved = localStorage.getItem('activeTimezones');
    if (saved) {
        activeTimezones = JSON.parse(saved);
        renderClocks();
    } else {
        // Add default timezones on first visit
        activeTimezones = ['America/New_York', 'Europe/London', 'Asia/Tokyo'];
        saveTimezones();
        renderClocks();
    }

    // Update time every second
    setInterval(updateAllClocks, 1000);

    // Add event listeners
    document.getElementById('addTimezoneBtn').addEventListener('click', addTimezone);
    document.getElementById('timezoneInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') addTimezone();
    });

    // Quick add buttons
    document.querySelectorAll('.quick-add').forEach(btn => {
        btn.addEventListener('click', function () {
            const tz = this.dataset.tz;
            if (!activeTimezones.includes(tz)) {
                activeTimezones.push(tz);
                saveTimezones();
                renderClocks();
            } else {
                alert('This timezone is already added!');
            }
        });
    });
});

function addTimezone() {
    const input = document.getElementById('timezoneInput');
    const tz = input.value.trim();

    if (!tz) {
        alert('Please enter a timezone');
        return;
    }

    if (!validTimezones.includes(tz)) {
        alert(`Invalid timezone: ${tz}\nPlease use format like: America/New_York, Europe/London, Asia/Tokyo`);
        return;
    }

    if (activeTimezones.includes(tz)) {
        alert('This timezone is already added!');
        return;
    }

    activeTimezones.push(tz);
    saveTimezones();
    renderClocks();
    input.value = '';
}

function removeTimezone(tz) {
    activeTimezones = activeTimezones.filter(t => t !== tz);
    saveTimezones();
    renderClocks();
}

function saveTimezones() {
    localStorage.setItem('activeTimezones', JSON.stringify(activeTimezones));
}

function renderClocks() {
    const container = document.getElementById('clocksContainer');

    if (activeTimezones.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No timezones added. Use the controls above to add one!</p></div>';
        return;
    }

    container.innerHTML = activeTimezones.map(tz => `
        <div class="clock-card" data-tz="${tz}">
            <div class="timezone-name">${formatTimezoneName(tz)}</div>
            <div class="timezone-offset">${getTimezoneOffset(tz)}</div>
            <div class="digital-time" data-time="${tz}">--:--:--</div>
            <div class="date-info" data-date="${tz}">Loading...</div>
            <button class="remove-btn" onclick="removeTimezone('${tz}')">Remove</button>
        </div>
    `).join('');

    updateAllClocks();
}

function updateAllClocks() {
    activeTimezones.forEach(tz => {
        const timeElement = document.querySelector(`[data-time="${tz}"]`);
        const dateElement = document.querySelector(`[data-date="${tz}"]`);

        if (timeElement && dateElement) {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: tz,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            const dateFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: tz,
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            });

            const now = new Date();
            timeElement.textContent = formatter.format(now);
            dateElement.textContent = dateFormatter.format(now);
        }
    });
}

function formatTimezoneName(tz) {
    return tz.replace(/_/g, ' ').split('/').pop();
}

function getTimezoneOffset(tz) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        timeZoneName: 'short'
    });

    const parts = formatter.formatToParts(new Date());
    const timeZoneName = parts.find(part => part.type === 'timeZoneName')?.value || '';

    return timeZoneName;
}
