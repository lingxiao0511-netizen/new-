#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF 合并工具
合并指定目录下的所有 PDF 文件
"""

from pypdf import PdfWriter, PdfReader
import glob
import os
import sys


def merge_pdfs(input_pattern, output_file):
    """
    合并匹配模式的 PDF 文件
    
    Args:
        input_pattern: 输入文件匹配模式，如 "*.pdf" 或 "doc*.pdf"
        output_file: 输出文件名
    """
    writer = PdfWriter()
    
    # 获取所有匹配的 PDF 文件
    pdf_files = sorted(glob.glob(input_pattern))
    
    if not pdf_files:
        print(f"未找到匹配的 PDF 文件: {input_pattern}")
        return
    
    print(f"找到 {len(pdf_files)} 个 PDF 文件:")
    for pdf_file in pdf_files:
        print(f"  - {pdf_file}")
    
    # 合并文件
    for pdf_file in pdf_files:
        try:
            reader = PdfReader(pdf_file)
            for page in reader.pages:
                writer.add_page(page)
            print(f"✓ 已添加: {pdf_file} ({len(reader.pages)} 页)")
        except Exception as e:
            print(f"✗ 错误: 无法处理 {pdf_file}: {e}")
    
    # 保存合并后的文件
    with open(output_file, "wb") as output:
        writer.write(output)
    
    print(f"\n✅ 合并完成！输出文件: {output_file}")
    print(f"总页数: {len(writer.pages)}")


def main():
    import argparse
    
    parser = argparse.ArgumentParser(
        description="合并 PDF 文件",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  python merge_pdfs.py "*.pdf" -o combined.pdf
  python merge_pdfs.py "doc*.pdf" -o merged.pdf
  python merge_pdfs.py "report_*.pdf" -o final_report.pdf
        """
    )
    
    parser.add_argument(
        "pattern",
        help="输入文件匹配模式 (如: *.pdf, doc*.pdf)"
    )
    
    parser.add_argument(
        "-o", "--output",
        default="merged.pdf",
        help="输出文件名 (默认: merged.pdf)"
    )
    
    args = parser.parse_args()
    
    merge_pdfs(args.pattern, args.output)


if __name__ == "__main__":
    main()
