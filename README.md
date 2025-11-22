# BrotherGAi Homepage

Pure HTML + Tailwind CDN + Vanilla JavaScript homepage for BrotherGAi platform.

## 🚀 Features

- **Pure HTML** - No build process required
- **Tailwind CDN** - Styled with Tailwind CSS via CDN
- **Vanilla JavaScript** - No framework dependencies
- **Responsive Design** - Works on all devices
- **Modern UI** - Clean, minimalist Apple-style design

## 📁 Project Structure

```
brotherg-homepage/
├── index.html          # Main HTML file
├── netlify.toml        # Netlify configuration
├── README.md           # This file
├── .gitignore          # Git ignore file
└── BrotheGaiblue.png   # Logo image (copy manually)
```

## 🔧 Setup

1. **Copy Logo Image**
   - Place `BrotheGaiblue.png` in the project root directory
   - The logo should be 48x48px or larger

2. **Open Locally**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (http-server)
     npx http-server -p 8000
     ```

## 📦 Deployment

### Netlify Deployment

1. **Drag & Drop**
   - Visit [Netlify Drop](https://app.netlify.com/drop)
   - Drag the entire `brotherg-homepage` folder
   - Done! Your site is live

2. **Git Deployment**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
   - Connect your GitHub repo to Netlify
   - Netlify will auto-deploy on every push

3. **Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=.
   ```

## 🌐 CDN Dependencies

This project uses the following CDN resources:

- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Font Awesome Icons**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- **Google Fonts**: Inter, JetBrains Mono, Rajdhani

All dependencies are loaded from CDN, so no npm install is needed.

## 📝 Notes

- The HTML file is **pure and unmodified** - no build process required
- Works offline (after initial CDN load)
- Compatible with all modern browsers
- Netlify redirects are configured for SPA behavior

## 🔗 Links

- **Local Development**: `http://localhost:8000` (or your preferred port)
- **Netlify**: Configured for automatic deployment

## ⚠️ Important

**Remember to copy `BrotheGaiblue.png` to the project root before deploying!**

The logo image is referenced in `index.html` at line:
```html
<img src="BrotheGaiblue.png" alt="Logo" class="w-full h-full object-contain relative z-10">
```

---

**Version**: V.6.1 Pure  
**Status**: Production Ready  
**Last Updated**: 2024-11-22
