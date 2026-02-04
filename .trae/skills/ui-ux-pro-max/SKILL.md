---
name: ui-ux-pro-max
description: Comprehensive UI/UX design guide with 50+ styles, 97 color palettes, 57 font pairings, 99 UX guidelines. Invoke when designing UI components, choosing colors/typography, reviewing UX, building landing pages or dashboards.
---

# UI/UX Pro Max - 综合设计指南

## 简介

UI/UX Pro Max 是一个全面的设计指南，包含：
- **50+** 设计风格
- **97** 种配色方案
- **57** 种字体搭配
- **99** 条 UX 设计准则
- **25** 种图表类型
- 涵盖 **9** 种技术栈

## 优先级分类

| 优先级 | 类别 | 影响 | 领域 |
|--------|------|------|------|
| 1 | 无障碍访问 (Accessibility) | 🔴 CRITICAL | ux |
| 2 | 触摸与交互 (Touch & Interaction) | 🔴 CRITICAL | ux |
| 3 | 性能 (Performance) | 🟠 HIGH | ux |
| 4 | 布局与响应式 (Layout & Responsive) | 🟠 HIGH | ux |
| 5 | 字体与颜色 (Typography & Color) | 🟡 MEDIUM | typography, color |
| 6 | 动画 (Animation) | 🟡 MEDIUM | ux |
| 7 | 风格选择 (Style Selection) | 🟡 MEDIUM | style, product |
| 8 | 图表与数据 (Charts & Data) | 🟢 LOW | chart |

## 核心设计准则

### 1. 无障碍访问 (CRITICAL)

```
✓ color-contrast - 正常文本对比度至少 4.5:1
✓ focus-states - 交互元素显示可见的焦点环
✓ alt-text - 有意义的图片使用描述性 alt 文本
✓ aria-labels - 仅图标按钮使用 aria-label
✓ keyboard-nav - Tab 顺序与视觉顺序一致
✓ form-labels - 使用 label 标签并关联 for 属性
```

### 2. 触摸与交互 (CRITICAL)

```
✓ touch-target-size - 触摸目标最小 44x44px
✓ hover-vs-tap - 主要交互使用点击/触摸
✓ loading-buttons - 异步操作时禁用按钮
✓ error-feedback - 在问题附近显示清晰的错误信息
✓ cursor-pointer - 可点击元素添加 cursor-pointer
```

### 3. 性能 (HIGH)

```
✓ image-optimization - 使用 WebP、srcset、懒加载
✓ reduced-motion - 检查 prefers-reduced-motion
✓ content-jumping - 为异步内容预留空间
```

### 4. 布局与响应式 (HIGH)

```
✓ viewport-meta - width=device-width initial-scale=1
✓ readable-font-size - 移动端正文最小 16px
✓ horizontal-scroll - 确保内容适合视口宽度
✓ z-index-management - 定义 z-index 层级 (10, 20, 30, 50)
```

### 5. 字体与颜色 (MEDIUM)

```
✓ line-height - 正文使用 1.5-1.75 行高
✓ line-length - 每行限制 65-75 个字符
✓ font-pairing - 标题/正文字体风格匹配
```

### 6. 动画 (MEDIUM)

```
✓ duration-timing - 微交互使用 150-300ms
✓ transform-performance - 使用 transform/opacity，避免 width/height
✓ loading-states - 使用骨架屏或加载动画
```

### 7. 风格选择 (MEDIUM)

```
✓ style-match - 风格与产品类型匹配
✓ consistency - 所有页面使用相同样式
✓ no-emoji-icons - 使用 SVG 图标，不使用表情符号
```

### 8. 图表与数据 (LOW)

```
✓ chart-type - 图表类型与数据类型匹配
✓ color-guidance - 使用无障碍配色方案
✓ data-table - 为无障碍访问提供表格替代
```

## 设计风格库

### 现代简约风格
- **特点**:  clean, minimal, whitespace
- **适用**: SaaS, 科技产品, 作品集
- **配色**: 单色、中性色、微妙强调色
- **字体**: 无衬线字体，大字号标题

### 专业商务风格
- **特点**: professional, corporate, trustworthy
- **适用**: B2B, 金融, 企业服务
- **配色**: 深蓝、灰色、白色
- **字体**: 经典衬线或无衬线字体

### 活泼创意风格
- **特点**: playful, colorful, energetic
- **适用**: 消费应用, 教育, 娱乐
- **配色**: 明亮、渐变、对比色
- **字体**: 圆润、友好的字体

### 优雅奢华风格
- **特点**: elegant, luxurious, sophisticated
- **适用**: 时尚, 酒店, 高端品牌
- **配色**: 金色、深色调、柔和色
- **字体**: 优雅衬线字体

### 暗黑模式风格
- **特点**: dark mode, modern, sleek
- **适用**: 开发工具, 媒体应用, 夜间使用
- **配色**: 深灰背景、亮色文字、微妙强调色
- **字体**: 高对比度字体

## 配色方案

### 科技蓝
```
主色: #3B82F6
辅助: #1E40AF
背景: #F8FAFC
文字: #1E293B
```

### 自然绿
```
主色: #10B981
辅助: #047857
背景: #ECFDF5
文字: #064E3B
```

### 活力橙
```
主色: #F97316
辅助: #C2410C
背景: #FFF7ED
文字: #7C2D12
```

### 优雅紫
```
主色: #8B5CF6
辅助: #6D28D9
背景: #F5F3FF
文字: #4C1D95
```

### 专业灰
```
主色: #64748B
辅助: #334155
背景: #F1F5F9
文字: #0F172A
```

## 字体搭配

### 现代组合
- **标题**: Inter, Roboto, SF Pro Display
- **正文**: Inter, Open Sans, Source Sans Pro

### 经典组合
- **标题**: Playfair Display, Merriweather
- **正文**: Lora, Georgia, Times New Roman

### 创意组合
- **标题**: Poppins, Montserrat, Raleway
- **正文**: Nunito, Quicksand, Work Sans

## 使用场景

### 设计新组件时
1. 确定产品类型和行业
2. 选择匹配的设计风格
3. 应用配色和字体方案
4. 遵循 UX 准则

### 审查代码时
1. 检查无障碍访问实现
2. 验证响应式布局
3. 确认交互反馈
4. 检查性能优化

### 构建落地页时
1. 选择高转化率风格
2. 使用清晰的视觉层次
3. 优化加载速度
4. 确保移动端友好

### 设计仪表板时
1. 选择数据可视化风格
2. 使用合适的图表类型
3. 确保信息密度合理
4. 提供实时更新反馈

## 技术栈支持

- HTML + Tailwind CSS
- React
- Vue.js
- Next.js
- Angular
- Svelte
- 原生 CSS/SCSS
- Styled Components
- CSS Modules

## 快速检查清单

### 设计前
- [ ] 确定产品类型和目标用户
- [ ] 选择设计风格
- [ ] 选择配色方案
- [ ] 选择字体搭配

### 设计时
- [ ] 遵循无障碍访问准则
- [ ] 确保触摸目标足够大
- [ ] 优化图片和性能
- [ ] 实现响应式布局

### 设计后
- [ ] 检查颜色对比度
- [ ] 测试键盘导航
- [ ] 验证移动端体验
- [ ] 检查加载性能

## 示例

### 示例 1: SaaS 仪表板
```
产品类型: B2B SaaS
风格: 现代简约
配色: 科技蓝
字体: Inter
特点: 清晰的数据可视化，简洁的导航
```

### 示例 2: 电商网站
```
产品类型: 电商
风格: 活泼创意
配色: 活力橙
字体: Poppins + Nunito
特点: 大图片，清晰的 CTA，信任标识
```

### 示例 3: 作品集网站
```
产品类型: 个人作品集
风格: 优雅奢华
配色: 优雅紫
字体: Playfair Display + Lora
特点: 大字体，留白，高质量图片
```

## 相关资源

- 官方文档: https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max
- 配色工具: https://colorhunt.co/
- 字体工具: https://fonts.google.com/
- 无障碍检查: https://webaim.org/resources/contrastchecker/