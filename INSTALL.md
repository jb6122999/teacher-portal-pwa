# 📱 How to Install Teacher Portal as an App

## Overview
Teacher Portal is a **Progressive Web App (PWA)** that can be installed on any device just like a native app. Once installed, it works offline and launches from your home screen!

---

## ✅ Installation Methods by Device

### 🤖 Android Phone/Tablet (Chrome, Edge, Firefox)

#### Method 1: Install Prompt (Easiest)
1. Open the app: `https://jb6122999.github.io/teacher-portal-pwa/`
2. You'll see an **"Install"** prompt at the bottom
3. Tap **"Install"**
4. Confirm the installation
5. App appears on your home screen!

#### Method 2: Menu Option
1. Open the app in Chrome
2. Tap **⋮ (three dots)** at top right
3. Select **"Add to Home screen"** or **"Install app"**
4. Confirm
5. App is installed!

#### Method 3: Share
1. Open the app in Chrome
2. Tap **Share** icon
3. Tap **"Add to Home screen"**
4. Confirm

**After Installation:**
- App appears on home screen with icon
- Tap to launch anytime
- Works offline automatically
- Uninstall like any app: Long-press → Uninstall

---

### 🍎 iPhone/iPad (Safari)

#### Installation Steps:
1. Open the app in **Safari**: `https://jb6122999.github.io/teacher-portal-pwa/`
2. Tap **Share** button (↗) at bottom
3. Scroll and tap **"Add to Home Screen"**
4. Name your app (default: "Teacher Portal")
5. Tap **"Add"**
6. App appears on home screen!

**After Installation:**
- Tap the app icon to launch
- Works offline
- Looks like a native app
- Remove: Long-press → Remove App

**Note:** iOS PWAs have some limitations - some features may vary.

---

### 💻 Windows PC (Chrome/Edge)

#### Installation Steps:
1. Open the app in Chrome or Edge
2. Click the **Install icon** (⊞ or ⬇) in the address bar
3. Click **"Install"**
4. Choose install location (Desktop, Start Menu, etc.)
5. Launch from Start Menu or Desktop shortcut

**After Installation:**
- App opens in standalone window (no address bar)
- Works offline
- Appears in Control Panel → Programs
- Uninstall: Settings → Apps → Remove

---

### 🍎 Mac (Chrome/Safari)

#### Chrome Installation:
1. Open in Chrome: `https://jb6122999.github.io/teacher-portal-pwa/`
2. Click **⋮** (three dots) at top right
3. Select **"Install app"**
4. Confirm
5. App installs to Applications folder

#### Safari:
1. Open in Safari
2. Click **File** → **Add to Dock**
3. Confirm
4. App launches from Dock

**After Installation:**
- Launch from Applications or Dock
- Works offline
- Uninstall: Drag app to Trash

---

### 🐧 Linux (Chrome)

#### Installation Steps:
1. Open in Chrome: `https://jb6122999.github.io/teacher-portal-pwa/`
2. Click **⋮** at top right
3. Select **"Install app"**
4. Confirm installation location
5. App launches in standalone window

**After Installation:**
- Appears in application menu
- Launch from desktop or menu
- Uninstall: Remove from Applications or Desktop

---

## 🎯 What Happens After Installation?

✅ **App Icon** appears on home screen/desktop
✅ **Standalone Window** - no address bar
✅ **Offline Access** - works without internet
✅ **Fast Startup** - loads instantly from cache
✅ **Local Storage** - all data stays on device
✅ **Push-like Behavior** - acts like native app

---

## 🔧 Troubleshooting Installation

### "Install button not showing?"
- **Solution:** Make sure you're using HTTPS (not HTTP)
- Try a different browser (Chrome works best)
- Clear browser cache and reload
- Check if PWA criteria are met:
  - HTTPS enabled ✓
  - Manifest.json present ✓
  - Service Worker registered ✓

### "Installation fails or app crashes?"
- Clear app cache: Settings → Apps → Teacher Portal → Clear Cache
- Reinstall the app
- Try a different browser
- Restart your device

### "Can't see app icon after install?"
- **Android:** Check if app drawer shows it
- **iOS:** Swipe left to find it, or check Siri suggestions
- **Desktop:** Check Applications folder or Start Menu
- May take a minute to appear

### "Offline not working?"
- Ensure you opened the app at least once with internet
- Check if Service Worker is registered (F12 → Application)
- Try clearing cache and reinstalling
- Some browsers need to cache the page first

### "Data is lost after reinstalling?"
- Use **Settings → Export Data** to backup before uninstalling
- Restore with **Settings → Import Data** after reinstalling

---

## 🌐 Browser Compatibility

| Device | Browser | Status | Install Method |
|--------|---------|--------|-----------------|
| Android | Chrome | ✅ Full | Install prompt or menu |
| Android | Firefox | ✅ Full | Menu option |
| Android | Edge | ✅ Full | Install prompt or menu |
| Android | Samsung Browser | ✅ Full | Menu option |
| iPhone | Safari | ✅ Limited | Share → Add to Home Screen |
| iPad | Safari | ��� Limited | Share → Add to Home Screen |
| Windows | Chrome | ✅ Full | Install icon in address bar |
| Windows | Edge | ✅ Full | Install icon in address bar |
| Windows | Firefox | ⚠️ Partial | May not show install |
| Mac | Chrome | ✅ Full | Menu option |
| Mac | Safari | ✅ Full | File → Add to Dock |
| Mac | Firefox | ⚠️ Partial | Limited PWA support |
| Linux | Chrome | ✅ Full | Menu option |
| Linux | Firefox | ⚠️ Partial | Limited PWA support |

**Legend:** ✅ = Fully supported | ⚠️ = Partial support | ❌ = Not supported

---

## 📊 System Requirements

### Minimum Requirements:
- **OS:** Android 5.0+, iOS 11.3+, Windows 10+, Mac OS 10.12+, Linux
- **Browser:** Chrome 39+, Safari 13+, Edge 79+, Firefox 60+
- **Storage:** 50 MB free space
- **RAM:** 512 MB minimum
- **Internet:** HTTPS connection required

### Recommended:
- **OS:** Android 8.0+, iOS 13+, Windows 11, Mac OS 12+
- **Browser:** Latest version of Chrome or Edge
- **Storage:** 200 MB free space
- **RAM:** 2 GB+
- **Internet:** Good HTTPS connection for initial setup

---

## 🔄 Updating the App

The app updates automatically:
1. Changes are deployed to GitHub Pages
2. Service Worker detects updates
3. Next time you load, you get the latest version
4. Old cache is cleared automatically

**To force update:**
- Clear browser cache (Ctrl+Shift+Delete)
- Close and reopen the app
- Reinstall if needed

---

## 🗑️ Uninstalling

### Android
1. Long-press app icon on home screen
2. Tap **Uninstall** or **Remove**

### iPhone
1. Long-press app icon
2. Tap **Remove App**
3. Tap **Remove from Home Screen** or **Delete App**

### Windows
1. Right-click app icon
2. Select **Uninstall**
Or:
1. Settings → Apps → Apps & Features
2. Find "Teacher Portal"
3. Click → Uninstall

### Mac
1. Open Applications folder
2. Drag "Teacher Portal" to Trash
3. Empty Trash

### Linux
1. Open Applications menu
2. Right-click "Teacher Portal"
3. Select **Uninstall** or **Remove**

---

## ✨ Pro Tips

💡 **Create Desktop Shortcut (Windows/Mac):**
- Right-click installed app
- Select "Create shortcut" or equivalent
- Pin to desktop or taskbar

💡 **Pin to Taskbar (Windows):**
- Right-click app in taskbar
- Select "Pin to taskbar"

💡 **Add to Dock (Mac):**
- Right-click app icon
- Select "Options" → "Keep in Dock"

💡 **Pin to Home Screen (Android):**
- Long-press app icon
- Select "Add widgets" to add shortcuts

---

## 🆘 Still Having Issues?

1. **Check your internet:** Verify HTTPS connection works
2. **Try different browser:** Chrome works best for PWAs
3. **Clear cache:** Browser Settings → Clear browsing data
4. **Restart device:** Turn it off and on
5. **Check storage:** Ensure at least 50 MB free space
6. **Check console:** Press F12, look for errors
7. **Visit the repo:** https://github.com/jb6122999/teacher-portal-pwa

---

## 📚 Additional Resources

- **GitHub Repository:** https://github.com/jb6122999/teacher-portal-pwa
- **Live App:** https://jb6122999.github.io/teacher-portal-pwa/
- **PWA Documentation:** https://web.dev/progressive-web-apps/
- **Manifest Info:** https://web.dev/manifest/

---

**Happy Teaching! 📚✨**

Your Teacher Portal is now installed and ready to use!
