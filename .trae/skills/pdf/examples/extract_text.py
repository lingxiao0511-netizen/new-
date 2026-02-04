#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF 文本提取工具
从 PDF 文件中提取文本内容
"""

import pdfplumber
import argparse
import os


def extract_text_from_pdf(input_file, output_file=None, page_numbers=None):
    """
    从 PDF 提取文本
    
    Args:
        input_file: 输入 PDF 文件
        output_file: 输出文本文件（可选）
        page_numbers: 指定页码列表（可选）
    """
    if not os.path.exists(input_file):
        print(f"错误: 文件不存在: {input_file}")
        return
    
    all_text = []
    
    with pdfplumber.open(input_file) as pdf:
        total_pages = len(pdf.pages)
        print(f"PDF 总页数: {total_pages}")
        
        # 确定要处理的页面
        if page_numbers:
            pages_to_process = [p-1 for p in page_numbers if 1 <= p <= total_pages]
        else:
            pages_to_process = range(total_pages)
        
        for page_idx in pages_to_process:
            page = pdf.pages[page_idx]
            text = page.extract_text()
            
            if text:
                page_header = f"\n{'='*60}\n第 {page_idx + 1} 页\n{'='*60}\n"
                all_text.append(page_header)
                all_text.append(text)
                print(f"✓ 已提取第 {page_idx + 1} 页")
            else:
                print(f"⚠ 第 {page_idx + 1} 页无文本内容")
    
    full_text = "\n".join(all_text)
    
    # 输出到文件或控制台
    if output_file:
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(full_text)
        print(f"\n✅ 文本已保存到: {output_file}")
    else:
        print("\n" + "="*60)
        print("提取的文本内容:")
        print("="*60)
        print(full_text)
    
    return full_text


def main():
    parser = argparse.ArgumentParser(
        description="从 PDF 提取文本",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  python extract_text.py document.pdf
  python extract_text.py document.pdf -o output.txt
  python extract_text.py document.pdf -p 1 3 5
  python extract_text.py document.pdf -o output.txt -p 1-5
        """
    )
    
    parser.add_argument(
        "input",
        help="输入 PDF 文件"
    )
    
    parser.add_argument(
        "-o", "--output",
        help="输出文本文件（可选）"
    )
    
    parser.add_argument(
        "-p", "--pages",
        nargs="+",
        help="指定页码（如: 1 3 5 或 1-5）"
    )
    
    args = parser.parse_args()
    
    # 解析页码
    page_numbers = None
    if args.pages:
        page_numbers = []
        for page_arg in args.pages:
            if "-" in page_arg:
                start, end = map(int, page_arg.split("-"))
                page_numbers.extend(range(start, end + 1))
            else:
                page_numbers.append(int(page_arg))
    
    extract_text_from_pdf(args.input, args.output, page_numbers)


if __name__ == "__main__":
    main()
