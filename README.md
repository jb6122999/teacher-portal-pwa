# 📚 Teacher Portal - Progressive Web App (PWA)

A fully-featured Progressive Web App for teachers to manage classes, students, attendance, assignments, lesson plans, timetables, and notices with **offline support** and **dark mode**.

## ✨ Features

### Core Functionality
- 📊 **Dashboard** - Overview of classes, students, assignments, and attendance
- 📖 **My Classes** - Create and manage classes
- 👥 **Students** - Manage student information and records
- ✓ **Attendance** - Mark and track daily attendance
- 📝 **Lesson Plans** - Create and organize lesson plans
- ⏰ **Timetable** - Schedule and manage class timetables
- ✏️ **Assignments** - Create assignments and track submissions
- 📣 **Notices** - Post important notices for students
- ⚙️ **Settings** - Data backup, import/export, and management

### Technical Features
- ✅ **Offline Support** - Works completely offline with Service Workers
- 🎨 **Dark Mode** - Eye-friendly dark theme toggle
- 💾 **Local Storage** - All data stored locally in browser (no server needed)
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔄 **Data Sync** - JSON backup and import functionality
- 📥 **PWA Install** - Install as native app on Android/iOS/Desktop
- ⚡ **Fast Performance** - Instant loading and caching

## 🚀 Installation & Setup

### Option 1: Deploy to GitHub Pages (Recommended - Free HTTPS)

1. **Clone or fork this repository**
   ```bash
   git clone https://github.com/jb6122999/teacher-portal-pwa.git
   cd teacher-portal-pwa
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Set source to **main** branch
   - Your app will be available at: `https://jb6122999.github.io/teacher-portal-pwa/`

3. **Access the app**
   - Open `https://jb6122999.github.io/teacher-portal-pwa/` in your browser

### Option 2: Deploy to Any HTTPS Web Host

1. Download all files from this repository
2. Upload to your HTTPS-enabled web hosting
3. Open `index.html` through your host URL (HTTPS required for PWA)

### Option 3: Local Development

1. Clone the repository
2. Use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if http-server installed)
   http-server
   ```
3. Open `http://localhost:8000` in your browser

## 📱 How to Install as App

### Android (Chrome)
1. Open the app in Chrome
2. Tap the menu (⋮) → **"Add to Home screen"** / **"Install app"**
3. App will appear on your home screen
4. Launch it anytime, works offline!

### iOS (Safari)
1. Open the app in Safari
2. Tap **Share** → **Add to Home Screen**
3. App will appear on your home screen
4. Can be used offline

### Desktop (Chrome/Edge)
1. Open the app in Chrome or Edge
2. Click the **install icon** (⊞) in the address bar
3. Choose where to install
4. App launches in standalone window

### Windows/Mac/Linux
1. Open in Chrome or Edge
2. Click install button in address bar
3. App installs like a native application

## 🎯 How to Use

### Dashboard
- View summary of all your classes, students, and pending assignments
- Quick access buttons for common tasks

### Adding a Class
1. Go to **My Classes**
2. Click **+ Add Class**
3. Fill in class name, grade, and teacher info
4. Click **Save Class**

### Managing Students
1. Go to **Students**
2. Click **+ Add Student**
3. Enter student details and select their class
4. Click **Save Student**

### Marking Attendance
1. Go to **Attendance**
2. Select a class from dropdown
3. Check boxes for present students
4. Click **Save Attendance**
5. View attendance statistics on dashboard

### Creating Assignments
1. Go to **Assignments**
2. Click **+ Create Assignment**
3. Fill in title, due date, and description
4. Select class
5. Click **Create Assignment**

### Posting Notices
1. Go to **Notices**
2. Click **+ Post Notice**
3. Enter title and content
4. Click **Post Notice**

### Setting Timetable
1. Go to **Timetable**
2. Click **+ Add Time Slot**
3. Select day, time, class, and subject
4. Click **Save Slot**

## 💾 Data Management

### Export Data (Backup)
1. Go to **Settings**
2. Click **📥 Export Data (JSON)**
3. File will download automatically
4. Keep this file safe as backup

### Import Data (Restore)
1. Go to **Settings**
2. Click **📤 Import Data (JSON)**
3. Select your backup JSON file
4. Confirm the import
5. All data will be restored

### Clear All Data
⚠️ **WARNING**: This permanently deletes all data!
1. Go to **Settings**
2. Click **🗑️ Clear All Data**
3. Confirm the action

## 🌙 Dark Mode

- Click the **🌙 moon icon** in the header to toggle dark mode
- Your preference is saved automatically
- Perfect for nighttime use

## 🔒 Data Privacy & Security

- ✅ **All data is stored locally** in your browser
- ✅ **No data is sent to any server**
- ✅ **No login required** - fully private
- ✅ **No tracking or analytics**
- ⚠️ **Data is lost if browser cache is cleared** - use backup feature!

## 📊 Offline Features

This PWA works completely offline:
- View all your data without internet
- Mark attendance
- Create assignments and notices
- Add students and classes
- Changes sync when online

All data is cached in your browser's storage.

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - App structure
- **CSS3** - Responsive styling with dark mode
- **JavaScript (Vanilla)** - All functionality
- **Service Worker** - Offline caching
- **LocalStorage API** - Data persistence
- **Web App Manifest** - PWA configuration

### Browser Support
- ✅ Chrome/Edge (Android & Desktop)
- ✅ Safari (iOS 13+)
- ✅ Firefox
- ✅ Opera

### Storage Limits
- Typically 5-10 MB per domain
- Should handle 1000+ records easily
- Check browser storage in Settings

## 📋 File Structure

```
teacher-portal-pwa/
├── index.html              # Main application
├── manifest.json           # PWA configuration
├── service-worker.js       # Offline support
├── css/
│   ├── style.css          # Main styles
│   └── dark-mode.css      # Dark mode styles
├── js/
│   ├── app.js             # Core functionality
│   ├── storage.js         # LocalStorage management
│   └── ui.js              # UI utilities
└── README.md              # This file
```

## ⚡ Performance

- First load: ~200KB (with service worker cache)
- Cached loads: <1 second
- Offline performance: Same as online
- Mobile optimization: Fully responsive

## 🐛 Troubleshooting

### App won't install?
- Make sure you're using HTTPS (required for PWA)
- Clear browser cache and reload
- Try a different browser

### Data not saving?
- Check if localStorage is enabled in browser settings
- Ensure you're not in private/incognito mode
- Check available storage space

### Dark mode not working?
- Reload the page
- Check browser console for errors
- Try clearing cookies

### Offline not working?
- Service Worker might not be registered
- Check browser console for errors
- Make sure app loaded once with internet connection

## 🔄 Updates & Versioning

Current Version: **1.0.0**

Service Worker cache will automatically update when files change. If updates don't appear:
1. Clear browser cache
2. Reload the page (Ctrl+Shift+R or Cmd+Shift+R)
3. Reinstall the app

## 📝 Notes for Production Use

**⚠️ Important**: This is a front-end prototype for local use.

For a production school portal, add:
- 🔐 **Secure authentication** (Login system)
- 🗄️ **Backend database** (SQL/NoSQL)
- ☁️ **Cloud synchronization** (Multi-device sync)
- 👮 **Role-based access control** (Admin/Teacher/Student permissions)
- 🛡️ **Server-side security** (Data validation, encryption)
- 📱 **API** (REST/GraphQL for mobile apps)
- 📧 **Notifications** (Email/SMS alerts)
- 📊 **Analytics** (Usage tracking)

## 📄 License

MIT License - Feel free to use, modify, and distribute!

## 👨‍💻 Author

Created for teachers to manage classrooms efficiently.

## 🤝 Contributing

Found a bug or have a suggestion? 
- Open an issue on GitHub
- Submit a pull request
- Share feedback!

## 💡 Future Enhancements

- [ ] Parent portal view
- [ ] Student submissions tracking
- [ ] Grade management
- [ ] SMS/Email notifications
- [ ] Calendar integration
- [ ] Video lesson support
- [ ] File attachment support
- [ ] Multi-teacher coordination

## 📞 Support

For issues or questions:
1. Check this README
2. Ensure you're using HTTPS
3. Clear browser cache and reload
4. Check browser console for errors (F12)
5. Try a different browser

---

**Happy Teaching! 📚✨**

Made with ❤️ for teachers
