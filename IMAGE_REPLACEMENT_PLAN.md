# 图片替换方案

## 问题
Unsplash 图片在国内访问不稳定，部分图片无法加载。

## 解决方案
使用国内可访问的图床替代：
1. **Pexels** - https://www.pexels.com/zh-cn/
2. **Pixabay** - https://pixabay.com/zh/
3. **本地图片** - 放入 public/images 目录

## 图片清单

### Hero 组件
- [ ] `photo-1578662996442-48f60103fc96` → 玄学/神秘主题图片

### Services 组件 (6 张)
- [ ] `photo-1600080972464-98643bb7d053` → 风水
- [ ] `photo-1541783203917-83f7f0a63f8c` → 事业财运
- [ ] `photo-1589182373726-e4f658ab50f0` → 塔罗牌
- [ ] `photo-1542744173-8e7e53415bb0` → 情感合盘
- [ ] `photo-1596462502278-27bfdc403348` → 水晶疗愈
- [ ] `photo-1616744619440-e030a88b89d8` → 择吉日

### Cases 组件 (6 张)
- 同 Services 图片

### Blog 组件 (6 张)
- 同 Services 图片

### About 组件 (4 张)
- [ ] `photo-1507003211169-0a1dd7228f2d` → 大师照片
- [ ] `photo-1506794778202-cad84cf45f1d` → 团队成员 1
- [ ] `photo-1494790108377-be9c29b29330` → 团队成员 2
- [ ] `photo-1519085360753-af0119f7cbe7` → 团队成员 3

### FreeReading 组件
- [ ] `photo-1555421689-ca7b66d2c868` → 免费测算背景

## 替代图片源

### Pexels (推荐)
- 风水：https://www.pexels.com/photo/feng-shui-compass-8100495/
- 塔罗：https://www.pexels.com/photo/tarot-cards-2537652/
- 水晶：https://www.pexels.com/photo/crystal-stones-5639377/
- 星空：https://www.pexels.com/photo/starry-night-sky-1287508/

### Pixabay
- 八卦：https://pixabay.com/vectors/bagua-feng-shui-yin-yang-132269/
- 佛像：https://pixabay.com/photos/buddha-statue-temple-asia-1115642/

## 替换优先级
1. P0 - Hero 图片（最重要）
2. P1 - Services 图片（核心业务）
3. P2 - Cases/Blog 图片
4. P3 - About 团队照片

## 执行步骤
1. 收集所有可用图片 URL
2. 逐个组件替换
3. 测试加载速度
4. 提交更新
