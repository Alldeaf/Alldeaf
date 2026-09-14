# 🌍 Multi-Timezone Digital Clock

A beautiful, responsive web application that displays the current time in different time zones around the world.

## Features

✨ **Key Features:**
- 🕐 Real-time digital clock display
- 🌏 Support for all IANA timezones
- ➕ Add/remove timezones dynamically
- 💾 Persistent storage (saves your selected timezones)
- 📱 Fully responsive design
- 🎨 Beautiful gradient UI with smooth animations
- ⚡ Quick-add buttons for popular cities
- 📅 Date information for each timezone
- 🌐 Timezone offset display

## How to Use

1. **Open the application** - Simply open `index.html` in your web browser

2. **Add Timezones:**
   - Click on one of the quick-add buttons (New York, London, Tokyo, etc.)
   - Or enter a timezone manually (e.g., `America/New_York`) and click "Add Timezone"

3. **Manage Timezones:**
   - Each timezone appears in its own card
   - The time updates in real-time
   - Click "Remove" to delete a timezone

4. **Your selections are saved** - The app remembers your chosen timezones

## Supported Timezone Format

Use IANA timezone identifiers in the format:
- `Continent/City` (e.g., `America/New_York`, `Europe/Paris`, `Asia/Tokyo`)

### Common Examples:

**North America:**
- `America/New_York` - Eastern Time
- `America/Chicago` - Central Time
- `America/Denver` - Mountain Time
- `America/Los_Angeles` - Pacific Time
- `America/Anchorage` - Alaska

**Europe:**
- `Europe/London` - UK
- `Europe/Paris` - France
- `Europe/Berlin` - Germany
- `Europe/Moscow` - Russia

**Asia:**
- `Asia/Tokyo` - Japan
- `Asia/Shanghai` - China
- `Asia/Hong_Kong` - Hong Kong
- `Asia/Singapore` - Singapore
- `Asia/Dubai` - UAE
- `Asia/Kolkata` - India
- `Asia/Bangkok` - Thailand

**Australia/Pacific:**
- `Australia/Sydney` - Eastern Australia
- `Australia/Melbourne` - Victoria
- `Pacific/Auckland` - New Zealand
- `Pacific/Fiji` - Fiji

**Africa:**
- `Africa/Cairo` - Egypt
- `Africa/Lagos` - Nigeria
- `Africa/Johannesburg` - South Africa

## Technical Details

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6+)** - Real-time clock updates using `Intl.DateTimeFormat`
- **LocalStorage** - Persistent timezone preferences
- **Responsive Design** - Works on desktop, tablet, and mobile

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Installation

No installation required! This is a standalone HTML/CSS/JS application.

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start adding timezones!

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - JavaScript logic and timezone handling
- `README.md` - This file

## Future Enhancements

- [ ] 24-hour format toggle
- [ ] 12-hour format with AM/PM
- [ ] Analog clock visualization
- [ ] Timezone search/autocomplete
- [ ] Drag-to-reorder clocks
- [ ] Multiple color themes
- [ ] Export/import timezone presets

## License

MIT License - Feel free to use and modify!

## Author

Created with ❤️
