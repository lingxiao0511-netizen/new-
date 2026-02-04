# 安装 marketing_creator_pro_max_pc Windows 版本计划

## 项目概述
专注于安装 Windows 桌面应用版本，包含AI数字人克隆、声音克隆、短视频生成等功能。

## 安装步骤

### 1. 克隆项目代码
- 在 G 盘创建项目目录：`G:\AI_Projects`
- 从 GitHub 克隆项目到 `G:\AI_Projects\marketing_creator_pro_max_pc`

### 2. 环境检查与配置
- 确认 Node.js 版本（已确认 v24.13.0，满足 18+ 要求）
- 安装 pnpm：`npm install -g pnpm`
- 安装 Tauri 开发前置条件（Windows 版本）：
  - 安装 Microsoft Visual Studio C++ 生成工具
  - 安装 Windows SDK
  - 安装 Rust

### 3. 安装项目依赖
- 进入项目目录：`cd G:\AI_Projects\marketing_creator_pro_max_pc`
- 运行 `pnpm install` 安装所有依赖

### 4. 构建 Windows 安装包
- 运行 `pnpm tauri build` 构建正式版安装包
- 构建完成后，安装包将生成在 `src-tauri\target\release\bundle\msi` 目录

### 5. 安装应用
- 运行生成的 MSI 安装程序
- 按照安装向导完成安装
- 选择安装位置到 G 盘

### 6. 验证安装
- 启动安装后的应用
- 测试基本功能
- 确认应用正常运行

## 注意事项
- 项目需要较大的存储空间（建议至少 50GB）
- 首次构建可能需要较长时间（1-2小时）
- 确保网络连接稳定，以便下载依赖和工具链
- 构建过程中可能需要管理员权限