# Contributing to Teacher Portal PWA

## Welcome! 👋

Thank you for your interest in contributing to Teacher Portal! We welcome contributions from everyone.

## Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/jb6122999/teacher-portal-pwa.git
   cd teacher-portal-pwa
   ```

2. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Test thoroughly
   - Add comments for complex logic

4. **Test locally**
   ```bash
   python -m http.server 8000
   # Open http://localhost:8000
   ```

5. **Commit and push**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Describe what you changed
   - Explain why
   - Reference any related issues

## Code Style

- Use vanilla JavaScript (no frameworks)
- Keep functions small and focused
- Add comments for complex logic
- Use meaningful variable names
- Follow existing naming conventions

## File Organization

```
├── index.html           # Main HTML structure
├── manifest.json        # PWA configuration
├── service-worker.js    # Offline caching
├── css/
│   ├── style.css       # Main styles
│   └── dark-mode.css   # Dark mode styles
├── js/
│   ├── app.js          # Core functionality
│   ├── storage.js      # LocalStorage management
│   └── ui.js           # UI utilities
└── docs/               # Documentation
```

## Issue Types

- 🐛 **Bug:** Something isn't working
- ✨ **Feature:** New functionality request
- 📖 **Docs:** Documentation improvement
- 🎨 **UI/UX:** Design or interface improvement
- ♻️ **Refactor:** Code improvement without feature change

## Pull Request Process

1. Update documentation as needed
2. Test on multiple browsers/devices
3. Ensure no console errors
4. Follow the PR template
5. Be patient for review

## Testing Checklist

Before submitting a PR:
- [ ] Tested in Chrome
- [ ] Tested in Safari
- [ ] Tested on Android
- [ ] Tested on iOS
- [ ] Tested offline
- [ ] Dark mode works
- [ ] Data persists
- [ ] No console errors
- [ ] Responsive design works

## Report Bugs

Include:
- Browser and device
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable

## Suggest Features

- Describe the use case
- Explain why it's needed
- Suggest implementation if possible
- Link to related issues

## Documentation

Help improve docs by:
- Fixing typos
- Clarifying confusing sections
- Adding examples
- Translating documentation

## Code Review

Please be respectful during code review:
- Ask questions politely
- Explain your reasoning
- Suggest improvements constructively
- Accept feedback graciously

## License

By contributing, you agree your code will be licensed under MIT License.

## Questions?

- Open an issue
- Check existing issues and discussions
- Read the main README.md

---

**Thank you for contributing! 🙌**
