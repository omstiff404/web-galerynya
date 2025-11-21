# Stiff Gallery 🎨

<div align="center">

![StiffGallery](https://raw.githubusercontent.com/omstiff404/media-web/main/avatar/avatar.png)

**A Modern TikTok Creator Gallery Built with Pure Magic ✨**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com)

*A stunning gallery platform for TikTok creators to showcase their content*

[Live Demo](https://omstiff-galery.vercel.app/) • [Report Bug](https://github.com/omstiff404/web-galerynya/issues) • [Request Feature](https://github.com/omstiff404/web-galerynya/issues)

</div>

## 🌟 Features

### 🖼️ **Media Gallery**
- **Dynamic Image Display** - Automatically loads images from GitHub repository
- **High-Quality Preview** - Click to view images in full-screen modal with gray background
- **One-Click Download** - Download images directly to your device
- **Responsive Grid** - Beautiful masonry layout that works on all devices

### 🎵 **Music Player**
- **Built-in Audio Player** - Stream music tracks directly from GitHub
- **Playlist Support** - Automatically loads and organizes audio files
- **Sleek Minimal Controls** - Play, pause, next, previous with progress tracking
- **Auto-play Option** - Configurable auto-play feature

### 📊 **TikTok Integration**
- **Real-time Stats** - Fetches live TikTok follower count, following, and likes
- **Smart Caching** - Optimized API calls with configurable cache duration
- **Auto Refresh** - Automatic data updates at set intervals

### 🎨 **Modern Design**
- **Dark Theme** - Eye-friendly dark mode interface
- **Gradient Accents** - Beautiful color gradients throughout
- **Smooth Animations** - CSS transitions and hover effects
- **Mobile Responsive** - Perfect experience on all screen sizes

## 🚀 Quick Start

### Prerequisites
- GitHub account with repository containing:
  - `images/` folder for gallery images
  - `music/` folder for audio files
  - `avatar/` folder for profile pictures

### Installation
1. **Clone or Download** the HTML file to your project
2. **Configure** the `config.js` file with your GitHub details:
```javascript
const CONFIG = {
    github: {
        username: 'your-username',
        repo: 'your-repo-name',
        folders: {
            images: 'images',
            music: 'music', 
            avatar: 'avatar'
        },
        app: {
            name: 'YourGalleryName',
            autoPlayMusic: false,
            refreshInterval: 10,
            cacheDuration: 30
        }
    },
    getAvatarUrl: function() {
        return `https://raw.githubusercontent.com/${this.github.username}/${this.github.repo}/main/${this.github.folders.avatar}/profile.jpg`;
    },
    getImagesApiUrl: function() {
        return `https://api.github.com/repos/${this.github.username}/${this.github.repo}/contents/${this.github.folders.images}`;
    },
    getImageUrl: function(filename) {
        return `https://raw.githubusercontent.com/${this.github.username}/${this.github.repo}/main/${this.github.folders.images}/${filename}`;
    },
    getMusicApiUrl: function() {
        return `https://api.github.com/repos/${this.github.username}/${this.github.repo}/contents/${this.github.folders.music}`;
    },
    getMusicUrl: function(filename) {
        return `https://raw.githubusercontent.com/${this.github.username}/${this.github.repo}/main/${this.github.folders.music}/${filename}`;
    },
    getTikTokApiUrl: function() {
        return `https://api.tiklydown.eu.org/api/user/info?uniqueId=${this.github.username}`;
    }
};
