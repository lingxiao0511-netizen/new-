---
name: "browser-use"
description: "浏览器自动化工具，支持CLI命令控制浏览器。Invoke when user needs browser automation, web scraping, or automated web testing."
---

# Browser Use - 浏览器自动化工具

## 简介

Browser Use 是一个强大的浏览器自动化工具，提供 CLI 命令行接口，支持持久化浏览器会话，可用于网页自动化、数据抓取、自动化测试等场景。

## 系统要求

- **Python**: >= 3.11 (必需)
- **操作系统**: Windows / macOS / Linux
- **浏览器**: Chromium (默认) / Chrome / Edge

## 安装方法

### 方式一：使用 uv 安装（推荐）

```bash
# 安装 uv 包管理器
curl -LsSf https://astral.sh/uv/install.sh | sh

# 安装 browser-use
uv pip install "browser-use[cli]"

# 安装浏览器依赖（Chromium）
browser-use install
```

### 方式二：使用 pip 安装

```bash
pip install "browser-use[cli]"
browser-use install
```

### 方式三：无需安装直接使用

```bash
# 使用 uvx 直接运行，无需安装
uvx "browser-use[cli]" open https://example.com
```

## 核心命令

### 1. 导航命令

```bash
# 打开网页
browser-use open https://example.com

# 返回上一页
browser-use back

# 向下滚动
browser-use scroll down

# 向上滚动
browser-use scroll up
```

### 2. 页面状态

```bash
# 获取页面状态（URL、标题、可点击元素）
browser-use state

# 截图（输出 base64）
browser-use screenshot

# 截图保存到文件
browser-use screenshot path.png

# 完整页面截图
browser-use screenshot --full path.png
```

### 3. 交互命令

```bash
# 点击元素（使用 state 命令返回的索引）
browser-use click 5

# 输入文本到当前焦点元素
browser-use type "Hello World"

# 点击元素并输入文本
browser-use input 3 "text"

# 发送键盘按键
browser-use keys "Enter"
browser-use keys "Control+a"

# 选择下拉框选项
browser-use select 5 "option"
```

### 4. 标签页管理

```bash
# 切换到指定标签页
browser-use switch 1

# 关闭当前标签页
browser-use close-tab

# 关闭指定标签页
browser-use close-tab 2
```

### 5. JavaScript 执行

```bash
# 执行 JavaScript
browser-use eval "document.title"

# 使用 LLM 提取数据（需要 API key）
browser-use extract "all product prices"
```

### 6. Cookie 管理

```bash
# 获取所有 cookie
browser-use cookies get

# 获取指定 URL 的 cookie
browser-use cookies get --url https://example.com

# 设置 cookie
browser-use cookies set name value

# 清除所有 cookie
browser-use cookies clear

# 导出 cookie 到文件
browser-use cookies export cookies.json

# 从文件导入 cookie
browser-use cookies import cookies.json
```

### 7. 等待条件

```bash
# 等待元素可见
browser-use wait selector "h1"

# 等待元素消失
browser-use wait selector ".loading" --state hidden

# 等待文本出现
browser-use wait text "Success"

# 自定义超时时间（毫秒）
browser-use wait selector "h1" --timeout 5000
```

## 浏览器模式

```bash
# 默认：无头 Chromium
browser-use open https://example.com

# 有界面 Chromium
browser-use --browser chromium --headed open https://example.com

# 使用用户本地 Chrome（保留登录状态）
browser-use --browser real open https://example.com

# 云端浏览器（需要 API key）
browser-use --browser remote open https://example.com
```

## 典型工作流

### 示例：自动登录并抓取数据

```bash
# 1. 打开登录页面
browser-use open https://example.com/login

# 2. 查看页面元素
browser-use state

# 3. 输入用户名（假设索引为 1）
browser-use input 1 "username"

# 4. 输入密码（假设索引为 2）
browser-use input 2 "password"

# 5. 点击登录按钮（假设索引为 3）
browser-use click 3

# 6. 等待页面加载
browser-use wait selector ".dashboard"

# 7. 截图确认
browser-use screenshot dashboard.png

# 8. 提取数据
browser-use extract "all product names and prices"

# 9. 关闭浏览器
browser-use close
```

## 信息获取命令

```bash
# 获取页面标题
browser-use get title

# 获取页面 HTML
browser-use get html

# 获取指定元素的 HTML
browser-use get html --selector "h1"

# 获取元素文本
browser-use get text 5

# 获取输入框值
browser-use get value 3

# 获取元素属性
browser-use get attributes 5

# 获取元素位置
browser-use get bbox 5
```

## 高级交互

```bash
# 鼠标悬停
browser-use hover 5

# 双击
browser-use dblclick 5

# 右键点击
browser-use rightclick 5
```

## Python 持久化会话

```bash
# 设置变量
browser-use python "x = 42"

# 访问变量
browser-use python "print(x)"
```

## 注意事项

1. **Python 版本**: 必须使用 Python 3.11 或更高版本
2. **浏览器依赖**: 首次使用需要运行 `browser-use install` 安装 Chromium
3. **API Key**: 使用 `--browser remote` 或 `extract` 命令需要配置 API key
4. **元素索引**: 使用 `state` 命令获取可交互元素的索引号

## 故障排除

### 安装问题

```bash
# 如果安装失败，尝试升级 pip
python -m pip install --upgrade pip

# 然后重新安装
pip install "browser-use[cli]"
```

### 浏览器启动失败

```bash
# 重新安装浏览器依赖
browser-use install

# 或者使用系统已安装的 Chrome
browser-use --browser real open https://example.com
```

## 相关链接

- 官方文档: https://skills.sh/browser-use/browser-use/browser-use
- GitHub: https://github.com/browser-use/browser-use
