#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF 拆分工具
将 PDF 文件按页拆分为多个文件
"""

from pypdf import PdfReader, PdfWriter
import os
import argparse


def split_pdf(input_file, output_dir=None, pages_per_file=1):
    """
    拆分 PDF 文件
    
    Args:
        input_file: 输入 PDF 文件
        output_dir: 输出目录（可选）
        pages_per_file: 每个输出文件的页数
    """
    if not os.path.exists(input_file):
        print(f"错误: 文件不存在: {input_file}")
        return
    
    # 设置输出目录
    if not output_dir:
        output_dir = os.path.splitext(input_file)[0] + "_split"
    
    os.makedirs(output_dir, exist_ok=True)
    
    # 读取 PDF
    reader = PdfReader(input_file)
    total_pages = len(reader.pages)
    
    print(f"PDF 总页数: {total_pages}")
    print(f"每文件页数: {pages_per_file}")
    print(f"输出目录: {output_dir}")
    print()
    
    # 计算输出文件数量
    num_files = (total_pages + pages_per_file - 1) // pages_per_file
    
    file_count = 0
    for file_idx in range(num_files):
        writer = PdfWriter()
        
        start_page = file_idx * pages_per_file
        end_page = min(start_page + pages_per_file, total_pages)
        
        for page_idx in range(start_page, end_page):
            writer.add_page(reader.pages[page_idx])
        
        # 生成输出文件名
        base_name = os.path.splitext(os.path.basename(input_file))[0]
        if pages_per_file == 1:
            output_file = os.path.join(output_dir, f"{base_name}_page_{start_page + 1}.pdf")
        else:
            output_file = os.path.join(output_dir, f"{base_name}_pages_{start_page + 1}-{end_page}.pdf")
        
        # 保存文件
        with open(output_file, "wb") as output:
            writer.write(output)
        
        file_count += 1
        print(f"✓ 已创建: {os.path.basename(output_file)} ({end_page - start_page} 页)")
    
    print(f"\n✅ 拆分完成！共生成 {file_count} 个文件")


def split_pdf_by_ranges(input_file, ranges, output_dir=None):
    """
    按指定页码范围拆分 PDF
    
    Args:
        input_file: 输入 PDF 文件
        ranges: 页码范围列表，如 [(1, 5), (6, 10)]
        output_dir: 输出目录
    """
    if not os.path.exists(input_file):
        print(f"错误: 文件不存在: {input_file}")
        return
    
    # 设置输出目录
    if not output_dir:
        output_dir = os.path.splitext(input_file)[0] + "_split"
    
    os.makedirs(output_dir, exist_ok=True)
    
    # 读取 PDF
    reader = PdfReader(input_file)
    total_pages = len(reader.pages)
    
    base_name = os.path.splitext(os.path.basename(input_file))[0]
    
    file_count = 0
    for range_idx, (start, end) in enumerate(ranges):
        # 验证页码范围
        if start < 1 or end > total_pages or start > end:
            print(f"⚠ 跳过无效范围: {start}-{end}")
            continue
        
        writer = PdfWriter()
        
        for page_idx in range(start - 1, end):
            writer.add_page(reader.pages[page_idx])
        
        # 生成输出文件名
        output_file = os.path.join(output_dir, f"{base_name}_pages_{start}-{end}.pdf")
        
        # 保存文件
        with open(output_file, "wb") as output:
            writer.write(output)
        
        file_count += 1
        print(f"✓ 已创建: {os.path.basename(output_file)} ({end - start + 1} 页)")
    
    print(f"\n✅ 拆分完成！共生成 {file_count} 个文件")


def main():
    parser = argparse.ArgumentParser(
        description="拆分 PDF 文件",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  # 每页拆分为单独文件
  python split_pdf.py document.pdf
  
  # 每 5 页拆分为一个文件
  python split_pdf.py document.pdf -n 5
  
  # 指定页码范围
  python split_pdf.py document.pdf -r 1-5 6-10 11-15
        """
    )
    
    parser.add_argument(
        "input",
        help="输入 PDF 文件"
    )
    
    parser.add_argument(
        "-o", "--output",
        help="输出目录（可选）"
    )
    
    parser.add_argument(
        "-n", "--pages-per-file",
        type=int,
        default=1,
        help="每个文件的页数（默认: 1）"
    )
    
    parser.add_argument(
        "-r", "--ranges",
        nargs="+",
        help="页码范围（如: 1-5 6-10）"
    )
    
    args = parser.parse_args()
    
    if args.ranges:
        # 解析页码范围
        ranges = []
        for range_str in args.ranges:
            if "-" in range_str:
                start, end = map(int, range_str.split("-"))
                ranges.append((start, end))
        
        split_pdf_by_ranges(args.input, ranges, args.output)
    else:
        split_pdf(args.input, args.output, args.pages_per_file)


if __name__ == "__main__":
    main()
