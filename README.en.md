# ChinALE

<div align="center">

[![GitHub license](https://img.shields.io/github/license/Ahua9527/ChinALE)](https://github.com/Ahua9527/ChinALE/blob/main/LICENSE)
![GitHub stars](https://img.shields.io/github/stars/Ahua9527/ChinALE)

Unlock Chinese Metadata, Bridge AVID’s World.

[English](./README.en.md) · 简体中文 · [Live Demo](https://chinale.ahua.space)

</div>

## 📝 Project Overview

**ChinALE** is a web-based solution addressing **Chinese metadata compatibility in AVID Media Composer**. It converts Avid Log Exchange (ALE) files to **GBK encoding format**, ensuring flawless Chinese character import/display in AVID systems and eliminating garbled text issues.

## ✨ Key Features

- 🚀 **Client-side Processing** - No backend servers, zero data leakage
- 📱 **PWA Support** - Installable as native app with offline capability
- 🌓 **Auto Dark/Light Theme** - Seamless system theme synchronization
- 🔄 **Batch Processing** - Convert multiple ALE files simultaneously
- 📂 **Drag & Drop Upload** - Intuitive file handling
- 📊 **Smart Encoding Detection** - Auto-recognizes original encoding (UTF-8/ASCII/GB18030)
- ✅ **Compatibility Validation** - Ensures AVID import specification compliance

## 🚀 Getting Started

### Live Demo

Visit [ChinALE Online](https://chinale.ahua.space) to start using immediately.

### 📖 User Guide

1. **Open webpage** and drag-drop ALE files to upload zone (or click to select)
2. **Multi-select** ALE files (Ctrl/Cmd supported)
3. Click **"Convert Encoding"** button
4. Wait for processing - **GBK-encoded ALE** files auto-download upon completion
5. Generated files guarantee:
   - Full metadata preservation
   - Chinese fields auto-converted to GBK
   - Lossless conversion of timecode, framerate, reel names
   - Full compliance with AVID Media Composer import specs

## 🛠️ Tech Stack

- **React** + **TypeScript** - Core framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **File API** - Browser-based file processing
- **PWA** - Progressive Web App features
- **iconify** - Vector icon library

## Local Development


1. Clone repository
```bash
git clone https://github.com/Ahua9527/ChinALE.git
cd ChinALE
```

2. Install dependencies
```bash
npm install
```

3. Start dev server
```bash
npm run dev
```

4. Production build
```bash
npm run build
```
## 🌈 Developer Notes

### Project Structure

```
ChinALE/
├── src/
│   ├── components/     # React components
│   ├── context/        # React Context
│   ├── utils/          # Utility functions
│   ├── styles/         # Style files
│   └── App.tsx         # Main component
├── public/             # Static assets
└── config files
```

## 📃 License
MIT License

## 🤝 Contributing
Issues and PRs are welcome!

## 👨‍💻 Author
[哆啦Ahua🌱 ](https://github.com/Ahua9527)
