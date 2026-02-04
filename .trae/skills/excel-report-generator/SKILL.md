---
name: "excel-report-generator"
description: "自动生成Excel报表，支持数据格式化、图表插入、样式设置等功能。Invoke when user needs to create Excel reports, data exports, or automated spreadsheet generation."
---

# Excel 报表自动生成 Skill

## 功能概述

本Skill用于自动化生成Excel报表，支持以下功能：
- 数据写入和格式化
- 单元格样式设置（字体、颜色、边框、对齐等）
- 图表自动生成（柱状图、折线图、饼图等）
- 多Sheet管理
- 公式计算
- 数据透视表
- 条件格式

## 使用场景

当用户需要以下功能时调用本Skill：
1. 生成数据报表
2. 导出数据到Excel
3. 创建自动化报表
4. 批量生成Excel文件
5. 数据可视化报表

## 技术依赖

```bash
pip install openpyxl pandas xlsxwriter
```

## 核心功能示例

### 1. 基础报表生成

```python
import openpyxl
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.chart import BarChart, Reference

def create_basic_report(data, output_path):
    """创建基础报表"""
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "报表"
    
    # 写入表头
    headers = list(data[0].keys())
    for col, header in enumerate(headers, 1):
        cell = ws.cell(row=1, column=col, value=header)
        # 设置表头样式
        cell.font = Font(bold=True, size=12, color="FFFFFF")
        cell.fill = PatternFill(start_color="4472C4", end_color="4472C4", fill_type="solid")
        cell.alignment = Alignment(horizontal="center", vertical="center")
    
    # 写入数据
    for row_idx, row_data in enumerate(data, 2):
        for col_idx, header in enumerate(headers, 1):
            cell = ws.cell(row=row_idx, column=col_idx, value=row_data[header])
            cell.alignment = Alignment(horizontal="left", vertical="center")
    
    # 自动调整列宽
    for column in ws.columns:
        max_length = 0
        column_letter = column[0].column_letter
        for cell in column:
            try:
                if len(str(cell.value)) > max_length:
                    max_length = len(str(cell.value))
            except:
                pass
        adjusted_width = min(max_length + 2, 50)
        ws.column_dimensions[column_letter].width = adjusted_width
    
    wb.save(output_path)
    return output_path
```

### 2. 带图表的报表

```python
def create_chart_report(data, output_path, chart_type="bar"):
    """创建带图表的报表"""
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "数据报表"
    
    # 写入数据
    for row_idx, row_data in enumerate(data, 1):
        for col_idx, value in enumerate(row_data, 1):
            ws.cell(row=row_idx, column=col_idx, value=value)
    
    # 创建图表
    chart = BarChart()
    chart.type = "col"
    chart.style = 10
    chart.title = "数据统计"
    chart.y_axis.title = '数值'
    chart.x_axis.title = '类别'
    
    data_ref = Reference(ws, min_col=2, min_row=1, max_row=len(data), max_col=2)
    cats_ref = Reference(ws, min_col=1, min_row=2, max_row=len(data))
    chart.add_data(data_ref, titles_from_data=True)
    chart.set_categories(cats_ref)
    chart.shape = 4
    
    ws.add_chart(chart, "D2")
    wb.save(output_path)
    return output_path
```

### 3. 多Sheet报表

```python
def create_multi_sheet_report(data_dict, output_path):
    """创建多Sheet报表"""
    wb = openpyxl.Workbook()
    
    # 删除默认Sheet
    wb.remove(wb.active)
    
    for sheet_name, sheet_data in data_dict.items():
        ws = wb.create_sheet(title=sheet_name)
        
        # 写入数据
        for row_idx, row_data in enumerate(sheet_data, 1):
            for col_idx, value in enumerate(row_data, 1):
                cell = ws.cell(row=row_idx, column=col_idx, value=value)
                
                # 表头样式
                if row_idx == 1:
                    cell.font = Font(bold=True, size=11)
                    cell.fill = PatternFill(start_color="D9E1F2", end_color="D9E1F2", fill_type="solid")
    
    wb.save(output_path)
    return output_path
```

### 4. 高级样式设置

```python
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

def apply_advanced_style(ws):
    """应用高级样式"""
    # 定义边框样式
    thin_border = Border(
        left=Side(style='thin'),
        right=Side(style='thin'),
        top=Side(style='thin'),
        bottom=Side(style='thin')
    )
    
    # 应用到所有单元格
    for row in ws.iter_rows():
        for cell in row:
            cell.border = thin_border
            cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
            
            # 根据内容类型设置颜色
            if isinstance(cell.value, (int, float)):
                cell.number_format = '#,##0.00'
            elif isinstance(cell.value, str) and cell.value.startswith('20'):
                # 日期格式
                cell.number_format = 'YYYY-MM-DD'
```

### 5. 使用Pandas快速生成

```python
import pandas as pd

def create_report_with_pandas(df, output_path, sheet_name="Sheet1"):
    """使用Pandas生成Excel报表"""
    with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
        df.to_excel(writer, sheet_name=sheet_name, index=False)
        
        # 获取工作簿和工作表
        workbook = writer.book
        worksheet = writer.sheets[sheet_name]
        
        # 应用样式
        apply_advanced_style(worksheet)
    
    return output_path
```

## 最佳实践

1. **数据验证**：在写入前验证数据类型和格式
2. **错误处理**：添加try-except块处理异常
3. **性能优化**：大数据量时考虑使用`write_only`模式
4. **内存管理**：及时关闭工作簿释放内存
5. **样式复用**：定义样式模板避免重复代码

## 常见问题

1. **中文乱码**：确保使用正确的字体（如宋体、微软雅黑）
2. **列宽问题**：使用自动调整或根据内容计算
3. **大数据量**：考虑使用`xlsxwriter`或分Sheet存储
4. **公式不计算**：保存后重新打开Excel会自动计算

## 扩展功能

- 邮件自动发送报表
- 定时任务生成报表
- 数据库存储报表模板
- 报表权限管理
