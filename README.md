# ChinALE

<div align="center">

[![GitHub license](https://img.shields.io/github/license/Ahua9527/ChinALE)](https://github.com/Ahua9527/ChinALE/blob/main/LICENSE)
![GitHub stars](https://img.shields.io/github/stars/Ahua9527/ChinALE)

ChinALE – 让AVID读懂中文

[English](./README.en.md) · 简体中文 · [在线体验](https://chinale.ahua.space)

</div>

## 📝 项目介绍

**ChinALE** 是一款专注于解决 **AVID Media Composer 中文元数据兼容性**问题的 Web 工具。它能将 Avid Log Exchange (ALE) 文件快速转换为 **GBK 编码格式**，确保中文字符在 AVID 中完美导入与显示，告别乱码困扰。

## ✨ 功能特性

- 🚀 **纯浏览器端处理**，无需后端服务器，隐私数据零泄露
- 📱 **PWA 支持**，可安装为本地应用，离线使用
- 🌓 **自动切换亮色/暗色主题**，贴合系统设置
- 🔄 **批量处理**，支持同时转换多个 ALE 文件
- 📂 **一键拖放上传**，简化操作流程
- 📊 **智能编码检测**，自动识别原始编码并转换为 GBK
- ✅ **兼容性验证**，确保生成文件符合 AVID 导入规范

## 🚀 开始使用

### 在线体验

访问 [ChinALE 在线版](https://chinale.ahua.space) 立即使用。

### 📖 使用指南

1. **打开网页**，拖放 ALE 文件至上传区域（或点击选择文件）
2. **批量选择**多个 ALE 文件（支持 Ctrl/Cmd 多选）
3. 点击 **“转换编码”** 按钮
4. 等待处理完成，**GBK 编码的 ALE 文件**将自动下载
5. 生成的 ALE 文件包含以下字段兼容性保障：
   - 完整保留原始元数据
   - 中文字段自动转码为 GBK
   - 时间码、帧率、卷名等关键信息无损转换
   - 符合 AVID Media Composer 导入规范

## 🛠️ 技术栈

- **React** + **TypeScript** - 构建高效前端界面
- **Vite** - 闪电级构建工具
- **Tailwind CSS** - 原子化样式设计
- **File API** - 浏览器端文件处理
- **PWA** - 渐进式网页应用支持
- **iconify** - 矢量图标库

## 本地开发


1. 克隆仓库
```bash
git clone https://github.com/Ahua9527/ChinALE.git
cd ChinALE
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 生产环境构建
```bash
npm run build
```

## 🌈 开发者说明

### 项目结构

```
ChinALE/
├── src/
│   ├── components/     # React 组件
│   ├── context/       # React Context
│   ├── utils/         # 工具函数
│   ├── styles/        # 样式文件
│   └── App.tsx        # 主应用组件
├── public/            # 静态资源
└── ...配置文件
```


## 📃 许可证

[MIT License](LICENSE)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 👨‍💻 作者

[哆啦Ahua🌱 ](https://github.com/Ahua9527)
