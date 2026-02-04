#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
UI/UX Pro Max 设计指南搜索工具
根据产品类型、行业和关键词推荐设计方案
"""

import argparse
import json
import sys
from pathlib import Path

# 设计风格数据库
DESIGN_STYLES = {
    "saas": {
        "name": "现代简约",
        "keywords": ["clean", "minimal", "professional", "b2b"],
        "colors": ["科技蓝", "专业灰"],
        "fonts": ["Inter", "Roboto"],
        "description": "适合 SaaS、B2B 产品，强调功能性和专业性"
    },
    "ecommerce": {
        "name": "活泼创意",
        "keywords": ["playful", "colorful", "energetic", "sales"],
        "colors": ["活力橙", "自然绿"],
        "fonts": ["Poppins", "Nunito"],
        "description": "适合电商、零售，强调转化率和视觉吸引力"
    },
    "portfolio": {
        "name": "优雅奢华",
        "keywords": ["elegant", "creative", "artistic", "showcase"],
        "colors": ["优雅紫", "专业灰"],
        "fonts": ["Playfair Display", "Lora"],
        "description": "适合作品集、创意展示，强调视觉冲击力"
    },
    "dashboard": {
        "name": "现代简约",
        "keywords": ["data", "analytics", "admin", "functional"],
        "colors": ["科技蓝", "专业灰"],
        "fonts": ["Inter", "Open Sans"],
        "description": "适合数据仪表板，强调信息密度和可读性"
    },
    "landing": {
        "name": "活泼创意",
        "keywords": ["marketing", "conversion", "promotion"],
        "colors": ["活力橙", "科技蓝"],
        "fonts": ["Montserrat", "Raleway"],
        "description": "适合落地页，强调转化和视觉吸引力"
    },
    "healthcare": {
        "name": "专业商务",
        "keywords": ["trustworthy", "clean", "medical", "professional"],
        "colors": ["自然绿", "科技蓝"],
        "fonts": ["Roboto", "Open Sans"],
        "description": "适合医疗、健康，强调信任和专业"
    },
    "fintech": {
        "name": "专业商务",
        "keywords": ["secure", "trustworthy", "financial", "professional"],
        "colors": ["专业灰", "科技蓝"],
        "fonts": ["Inter", "SF Pro Display"],
        "description": "适合金融科技，强调安全和专业"
    },
    "education": {
        "name": "活泼创意",
        "keywords": ["friendly", "engaging", "learning", "accessible"],
        "colors": ["自然绿", "活力橙"],
        "fonts": ["Nunito", "Quicksand"],
        "description": "适合教育产品，强调友好和易用"
    },
    "gaming": {
        "name": "暗黑模式",
        "keywords": ["dark", "immersive", "entertainment", "dynamic"],
        "colors": ["暗黑模式"],
        "fonts": ["Montserrat", "Raleway"],
        "description": "适合游戏、娱乐，强调沉浸感和动感"
    }
}

# 配色方案数据库
COLOR_PALETTES = {
    "科技蓝": {
        "primary": "#3B82F6",
        "secondary": "#1E40AF",
        "background": "#F8FAFC",
        "text": "#1E293B",
        "accent": "#60A5FA"
    },
    "自然绿": {
        "primary": "#10B981",
        "secondary": "#047857",
        "background": "#ECFDF5",
        "text": "#064E3B",
        "accent": "#34D399"
    },
    "活力橙": {
        "primary": "#F97316",
        "secondary": "#C2410C",
        "background": "#FFF7ED",
        "text": "#7C2D12",
        "accent": "#FB923C"
    },
    "优雅紫": {
        "primary": "#8B5CF6",
        "secondary": "#6D28D9",
        "background": "#F5F3FF",
        "text": "#4C1D95",
        "accent": "#A78BFA"
    },
    "专业灰": {
        "primary": "#64748B",
        "secondary": "#334155",
        "background": "#F1F5F9",
        "text": "#0F172A",
        "accent": "#94A3B8"
    },
    "暗黑模式": {
        "primary": "#3B82F6",
        "secondary": "#60A5FA",
        "background": "#0F172A",
        "text": "#F8FAFC",
        "accent": "#1E293B"
    }
}

# 字体搭配数据库
FONT_PAIRINGS = {
    "Inter": {
        "heading": "Inter",
        "body": "Inter",
        "fallback": "system-ui, sans-serif"
    },
    "Roboto": {
        "heading": "Roboto",
        "body": "Roboto",
        "fallback": "Arial, sans-serif"
    },
    "Poppins": {
        "heading": "Poppins",
        "body": "Nunito",
        "fallback": "sans-serif"
    },
    "Playfair Display": {
        "heading": "Playfair Display",
        "body": "Lora",
        "fallback": "Georgia, serif"
    },
    "Montserrat": {
        "heading": "Montserrat",
        "body": "Open Sans",
        "fallback": "sans-serif"
    }
}

# UX 准则数据库
UX_GUIDELINES = {
    "accessibility": [
        "正常文本对比度至少 4.5:1",
        "交互元素显示可见的焦点环",
        "有意义的图片使用描述性 alt 文本",
        "仅图标按钮使用 aria-label",
        "Tab 顺序与视觉顺序一致",
        "使用 label 标签并关联 for 属性"
    ],
    "interaction": [
        "触摸目标最小 44x44px",
        "主要交互使用点击/触摸",
        "异步操作时禁用按钮",
        "在问题附近显示清晰的错误信息",
        "可点击元素添加 cursor-pointer"
    ],
    "performance": [
        "使用 WebP、srcset、懒加载",
        "检查 prefers-reduced-motion",
        "为异步内容预留空间"
    ],
    "responsive": [
        "viewport-meta: width=device-width initial-scale=1",
        "移动端正文最小 16px",
        "确保内容适合视口宽度",
        "定义 z-index 层级 (10, 20, 30, 50)"
    ]
}


def search_design_system(query: str) -> dict:
    """根据查询搜索设计方案"""
    query_lower = query.lower()
    
    # 匹配产品类型
    matched_style = None
    for product_type, style_info in DESIGN_STYLES.items():
        if product_type in query_lower:
            matched_style = style_info
            break
        # 检查关键词匹配
        for keyword in style_info["keywords"]:
            if keyword in query_lower:
                matched_style = style_info
                break
        if matched_style:
            break
    
    # 如果没有匹配，使用默认风格
    if not matched_style:
        matched_style = DESIGN_STYLES["saas"]
    
    # 获取配色方案
    colors = {}
    for color_name in matched_style["colors"]:
        if color_name in COLOR_PALETTES:
            colors[color_name] = COLOR_PALETTES[color_name]
    
    # 获取字体搭配
    fonts = {}
    for font_name in matched_style["fonts"]:
        if font_name in FONT_PAIRINGS:
            fonts[font_name] = FONT_PAIRINGS[font_name]
    
    return {
        "product_type": product_type if matched_style else "general",
        "style": matched_style,
        "colors": colors,
        "fonts": fonts,
        "ux_guidelines": UX_GUIDELINES
    }


def generate_design_system(query: str, project_name: str = None) -> str:
    """生成完整的设计系统文档"""
    result = search_design_system(query)
    
    output = []
    output.append("=" * 60)
    output.append("UI/UX Pro Max - 设计系统推荐")
    output.append("=" * 60)
    
    if project_name:
        output.append(f"\n📁 项目名称: {project_name}")
    
    output.append(f"\n🔍 查询: {query}")
    output.append(f"\n📊 产品类型: {result['product_type']}")
    
    # 风格推荐
    output.append("\n" + "-" * 60)
    output.append("🎨 设计风格")
    output.append("-" * 60)
    style = result["style"]
    output.append(f"名称: {style['name']}")
    output.append(f"描述: {style['description']}")
    output.append(f"关键词: {', '.join(style['keywords'])}")
    
    # 配色方案
    output.append("\n" + "-" * 60)
    output.append("🎨 配色方案")
    output.append("-" * 60)
    for color_name, colors in result["colors"].items():
        output.append(f"\n{color_name}:")
        for key, value in colors.items():
            output.append(f"  {key}: {value}")
    
    # 字体搭配
    output.append("\n" + "-" * 60)
    output.append("🔤 字体搭配")
    output.append("-" * 60)
    for font_name, fonts in result["fonts"].items():
        output.append(f"\n{font_name}:")
        output.append(f"  标题: {fonts['heading']}")
        output.append(f"  正文: {fonts['body']}")
        output.append(f"  备用: {fonts['fallback']}")
    
    # UX 准则
    output.append("\n" + "-" * 60)
    output.append("✅ UX 设计准则")
    output.append("-" * 60)
    
    output.append("\n🔴 无障碍访问 (CRITICAL):")
    for guideline in result["ux_guidelines"]["accessibility"]:
        output.append(f"  ✓ {guideline}")
    
    output.append("\n🔴 触摸与交互 (CRITICAL):")
    for guideline in result["ux_guidelines"]["interaction"]:
        output.append(f"  ✓ {guideline}")
    
    output.append("\n🟠 性能 (HIGH):")
    for guideline in result["ux_guidelines"]["performance"]:
        output.append(f"  ✓ {guideline}")
    
    output.append("\n🟠 响应式布局 (HIGH):")
    for guideline in result["ux_guidelines"]["responsive"]:
        output.append(f"  ✓ {guideline}")
    
    # Tailwind CSS 配置示例
    output.append("\n" + "-" * 60)
    output.append("🛠️ Tailwind CSS 配置示例")
    output.append("-" * 60)
    
    if result["colors"]:
        first_color = list(result["colors"].values())[0]
        output.append("\n// tailwind.config.js")
        output.append("module.exports = {")
        output.append("  theme: {")
        output.append("    extend: {")
        output.append("      colors: {")
        output.append(f"        primary: '{first_color['primary']}',")
        output.append(f"        secondary: '{first_color['secondary']}',")
        output.append(f"        background: '{first_color['background']}',")
        output.append(f"        text: '{first_color['text']}',")
        output.append(f"        accent: '{first_color['accent']}',")
        output.append("      },")
        
        if result["fonts"]:
            first_font = list(result["fonts"].values())[0]
            output.append("      fontFamily: {")
            output.append(f"        heading: ['{first_font['heading']}', '{first_font['fallback']}'],")
            output.append(f"        body: ['{first_font['body']}', '{first_font['fallback']}'],")
            output.append("      },")
        
        output.append("    },")
        output.append("  },")
        output.append("}")
    
    output.append("\n" + "=" * 60)
    
    return "\n".join(output)


def main():
    parser = argparse.ArgumentParser(
        description="UI/UX Pro Max 设计指南搜索工具",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  python search.py "saas dashboard b2b" --design-system
  python search.py "ecommerce fashion" --design-system -p "MyShop"
  python search.py "portfolio creative" --design-system
        """
    )
    
    parser.add_argument(
        "query",
        help="搜索查询，如产品类型、行业、关键词等"
    )
    
    parser.add_argument(
        "--design-system",
        action="store_true",
        help="生成完整的设计系统推荐"
    )
    
    parser.add_argument(
        "-p", "--project",
        help="项目名称"
    )
    
    parser.add_argument(
        "--json",
        action="store_true",
        help="以 JSON 格式输出"
    )
    
    args = parser.parse_args()
    
    if args.design_system:
        result = generate_design_system(args.query, args.project)
        print(result)
    elif args.json:
        result = search_design_system(args.query)
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        # 简单搜索模式
        result = search_design_system(args.query)
        print(f"🎨 推荐风格: {result['style']['name']}")
        print(f"🎨 配色方案: {', '.join(result['colors'].keys())}")
        print(f"🔤 字体搭配: {', '.join(result['fonts'].keys())}")


if __name__ == "__main__":
    main()
