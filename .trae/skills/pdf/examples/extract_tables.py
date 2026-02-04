#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF 表格提取工具
从 PDF 文件中提取表格并导出到 Excel
"""

import pdfplumber
import pandas as pd
import argparse
import os


def extract_tables_from_pdf(input_file, output_file=None):
    """
    从 PDF 提取所有表格
    
    Args:
        input_file: 输入 PDF 文件
        output_file: 输出 Excel 文件（可选）
    """
    if not os.path.exists(input_file):
        print(f"错误: 文件不存在: {input_file}")
        return
    
    all_tables = []
    
    with pdfplumber.open(input_file) as pdf:
        total_pages = len(pdf.pages)
        print(f"PDF 总页数: {total_pages}")
        
        for page_idx, page in enumerate(pdf.pages):
            print(f"\n正在处理第 {page_idx + 1} 页...")
            
            # 提取表格
            tables = page.extract_tables()
            
            if tables:
                print(f"  找到 {len(tables)} 个表格")
                
                for table_idx, table in enumerate(tables):
                    if table and len(table) > 0:
                        # 第一行作为表头
                        df = pd.DataFrame(table[1:], columns=table[0])
                        all_tables.append({
                            'page': page_idx + 1,
                            'table': table_idx + 1,
                            'data': df
                        })
                        print(f"    ✓ 表格 {table_idx + 1}: {len(df)} 行 x {len(df.columns)} 列")
            else:
                print(f"  未找到表格")
    
    if not all_tables:
        print("\n⚠ 未找到任何表格")
        return
    
    print(f"\n{'='*60}")
    print(f"共提取 {len(all_tables)} 个表格")
    print(f"{'='*60}")
    
    # 导出到 Excel
    if output_file:
        with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
            for idx, table_info in enumerate(all_tables):
                sheet_name = f"Page{table_info['page']}_Table{table_info['table']}"
                # 限制工作表名称长度
                sheet_name = sheet_name[:31]
                table_info['data'].to_excel(writer, sheet_name=sheet_name, index=False)
                print(f"✓ 已导出: {sheet_name}")
        
        print(f"\n✅ 表格已保存到: {output_file}")
    else:
        # 打印表格内容
        for table_info in all_tables:
            print(f"\n{'='*60}")
            print(f"第 {table_info['page']} 页 - 表格 {table_info['table']}")
            print(f"{'='*60}")
            print(table_info['data'].to_string())
    
    return all_tables


def main():
    parser = argparse.ArgumentParser(
        description="从 PDF 提取表格",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  python extract_tables.py document.pdf
  python extract_tables.py document.pdf -o tables.xlsx
        """
    )
    
    parser.add_argument(
        "input",
        help="输入 PDF 文件"
    )
    
    parser.add_argument(
        "-o", "--output",
        help="输出 Excel 文件（可选）"
    )
    
    args = parser.parse_args()
    
    # 默认输出文件名
    if not args.output:
        base_name = os.path.splitext(args.input)[0]
        args.output = f"{base_name}_tables.xlsx"
    
    extract_tables_from_pdf(args.input, args.output)


if __name__ == "__main__":
    main()
