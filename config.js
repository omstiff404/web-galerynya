// config.js - Configuration for GitHub Gallery
const GITHUB_CONFIG = {
    username: 'omstiff404',          // Pastikan ini username GitHub kamu
    repo: 'media-web',               // Pastikan ini nama repo yang benar
    branch: 'main',                  // Pastikan branch-nya benar
    
    // Path folders
    folders: {
        images: 'gambar',            // Folder untuk gambar gallery
        avatar: 'avatar',            // Folder untuk avatar
        music: 'musik'               // Folder untuk musik
    },
    
    // File names
    files: {
        avatar: 'avatar.png'         // Nama file avatar
    },
    
    // TikTok configuration
    tiktok: {
        username: 'omstiff404',      // Username TikTok
        apiUrl: 'https://api.fikmydomainsz.xyz/stalk/tiktok'
    },
    
    // App settings
    app: {
        name: 'StiffGallery',
        autoPlayMusic: true,         // Auto play musik saat halaman dimuat
        refreshInterval: 15,         // Interval refresh data TikTok (menit)
        cacheDuration: 10            // Durasi cache (menit)
    }
};

// Jangan diubah bagian di bawah ini
const CONFIG = {
    github: GITHUB_CONFIG,
    getAvatarUrl: function() {
        return `https://raw.githubusercontent.com/${this.github.username}/${this.github.repo}/${this.github.branch}/${this.github.folders.avatar}/${this.github.files.avatar}`;
    },
    getImagesApiUrl: function() {
        return `https://api.github.com/repos/${this.github.username}/${this.github.repo}/contents/${this.github.folders.images}`;
    },
    getImageUrl: function(filename) {
        return `https://raw.githubusercontent.com/${this.github.username}/${this.github.repo}/${this.github.branch}/${this.github.folders.images}/${filename}`;
    },
    getMusicApiUrl: function() {
        return `https://api.github.com/repos/${this.github.username}/${this.github.repo}/contents/${this.github.folders.music}`;
    },
    getMusicUrl: function(filename) {
        return `https://raw.githubusercontent.com/${this.github.username}/${this.github.repo}/${this.github.branch}/${this.github.folders.music}/${filename}`;
    },
    getTikTokApiUrl: function() {
        return `${this.github.tiktok.apiUrl}?username=${this.github.tiktok.username}`;
    },
    // Tambahkan function untuk direct download
    getDirectDownloadUrl: function(filename) {
        return `https://github.com/${this.github.username}/${this.github.repo}/raw/${this.github.branch}/${this.github.folders.images}/${filename}`;
    }
};