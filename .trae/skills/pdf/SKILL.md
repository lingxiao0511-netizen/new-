---
name: "pdf"
description: "PDF processing guide with Python libraries (pypdf, pdfplumber, reportlab) and CLI tools. Invoke when reading, creating, merging, splitting, or extracting content from PDF files."
---

# PDF 处理指南

## 简介

本指南涵盖使用 Python 库和命令行工具进行 PDF 处理的基本操作，包括读取、创建、合并、拆分、提取文本和表格等。

## 支持的库和工具

### Python 库
- **pypdf** - 基本 PDF 操作（合并、拆分、旋转）
- **pdfplumber** - 文本和表格提取
- **reportlab** - 创建 PDF
- **pandas** - 表格数据处理

### 命令行工具
- **pdftotext** (poppler-utils) - 提取文本
- **qpdf** - PDF 操作（合并、拆分、旋转）
- **pdftk** - PDF 工具包

---

## 快速开始

### 安装依赖

```bash
# Python 库
pip install pypdf pdfplumber reportlab pandas

# 命令行工具 (Windows)
# 使用 chocolatey
choco install poppler qpdf pdftk

# 命令行工具 (macOS)
brew install poppler qpdf pdftk-java

# 命令行工具 (Ubuntu/Debian)
sudo apt-get install poppler-utils qpdf pdftk
```

---

## pypdf - 基本操作

### 读取 PDF

```python
from pypdf import PdfReader, PdfWriter

# 读取 PDF
reader = PdfReader("document.pdf")
print(f"页数: {len(reader.pages)}")

# 提取文本
text = ""
for page in reader.pages:
    text += page.extract_text()
```

### 合并 PDF

```python
from pypdf import PdfWriter, PdfReader

writer = PdfWriter()
for pdf_file in ["doc1.pdf", "doc2.pdf", "doc3.pdf"]:
    reader = PdfReader(pdf_file)
    for page in reader.pages:
        writer.add_page(page)

with open("merged.pdf", "wb") as output:
    writer.write(output)
```

### 拆分 PDF

```python
reader = PdfReader("input.pdf")
for i, page in enumerate(reader.pages):
    writer = PdfWriter()
    writer.add_page(page)
    with open(f"page_{i+1}.pdf", "wb") as output:
        writer.write(output)
```

### 提取元数据

```python
reader = PdfReader("document.pdf")
meta = reader.metadata
print(f"标题: {meta.title}")
print(f"作者: {meta.author}")
print(f"主题: {meta.subject}")
print(f"创建者: {meta.creator}")
```

### 旋转页面

```python
reader = PdfReader("input.pdf")
writer = PdfWriter()

page = reader.pages[0]
page.rotate(90)  # 顺时针旋转 90 度
writer.add_page(page)

with open("rotated.pdf", "wb") as output:
    writer.write(output)
```

---

## pdfplumber - 文本和表格提取

### 提取文本（保留布局）

```python
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    for page in pdf.pages:
        text = page.extract_text()
        print(text)
```

### 提取表格

```python
with pdfplumber.open("document.pdf") as pdf:
    for i, page in enumerate(pdf.pages):
        tables = page.extract_tables()
        for j, table in enumerate(tables):
            print(f"第 {i+1} 页，表格 {j+1}:")
            for row in table:
                print(row)
```

### 高级表格提取（导出到 Excel）

```python
import pandas as pd
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    all_tables = []
    for page in pdf.pages:
        tables = page.extract_tables()
        for table in tables:
            if table:  # 检查表格不为空
                df = pd.DataFrame(table[1:], columns=table[0])
                all_tables.append(df)

# 合并所有表格
if all_tables:
    combined_df = pd.concat(all_tables, ignore_index=True)
    combined_df.to_excel("extracted_tables.xlsx", index=False)
```

---

## reportlab - 创建 PDF

### 基本 PDF 创建

```python
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

c = canvas.Canvas("hello.pdf", pagesize=letter)
width, height = letter

# 添加文本
c.drawString(100, height - 100, "Hello World!")
c.drawString(100, height - 120, "This is a PDF created with reportlab")

# 添加线条
c.line(100, height - 140, 400, height - 140)

# 保存
c.save()
```

### 创建多页 PDF

```python
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet

doc = SimpleDocTemplate("report.pdf", pagesize=letter)
styles = getSampleStyleSheet()
story = []

# 添加内容
title = Paragraph("Report Title", styles['Title'])
story.append(title)
story.append(Spacer(1, 12))

body = Paragraph("This is the body of the report. " * 20, styles['Normal'])
story.append(body)
story.append(PageBreak())

# 第 2 页
story.append(Paragraph("Page 2", styles['Heading1']))
story.append(Paragraph("Content for page 2", styles['Normal']))

# 构建 PDF
doc.build(story)
```

### 上下标处理

**重要**: 不要在 ReportLab PDF 中使用 Unicode 上下标字符（₀₁₂₃₄₅₆₇₈₉, ⁰¹²³⁴⁵⁶⁷⁸⁹）。内置字体不包含这些字形，会导致显示为黑色方块。

应该使用 ReportLab 的 XML 标记标签：

```python
from reportlab.platypus import Paragraph
from reportlab.lib.styles import getSampleStyleSheet

styles = getSampleStyleSheet()

# 下标: 使用 <sub> 标签
chemical = Paragraph("H<sub>2</sub>O", styles['Normal'])

# 上标: 使用 <super> 标签
squared = Paragraph("x<super>2</super> + y<super>2</super>", styles['Normal'])
```

---

## 命令行工具

### pdftotext (poppler-utils)

```bash
# 提取文本
pdftotext input.pdf output.txt

# 保留布局提取文本
pdftotext -layout input.pdf output.txt

# 提取特定页面
pdftotext -f 1 -l 5 input.pdf output.txt  # 第 1-5 页
```

### qpdf

```bash
# 合并 PDF
qpdf --empty --pages file1.pdf file2.pdf -- merged.pdf

# 拆分页面
qpdf input.pdf --pages . 1-5 -- pages1-5.pdf
qpdf input.pdf --pages . 6-10 -- pages6-10.pdf

# 旋转页面
qpdf input.pdf output.pdf --rotate=+90:1  # 第 1 页旋转 90 度

# 移除密码
qpdf --password=mypassword --decrypt encrypted.pdf decrypted.pdf
```

### pdftk

```bash
# 合并
pdftk file1.pdf file2.pdf cat output merged.pdf

# 拆分
pdftk input.pdf burst

# 旋转
pdftk input.pdf cat 1-endE output rotated.pdf  # 所有页面顺时针旋转 90 度
```

---

## 常见使用场景

### 场景 1: 合并多个 PDF 文件

```python
from pypdf import PdfWriter, PdfReader
import glob

writer = PdfWriter()

# 获取所有 PDF 文件
pdf_files = sorted(glob.glob("*.pdf"))

for pdf_file in pdf_files:
    reader = PdfReader(pdf_file)
    for page in reader.pages:
        writer.add_page(page)

with open("combined.pdf", "wb") as output:
    writer.write(output)

print(f"已合并 {len(pdf_files)} 个文件")
```

### 场景 2: 从 PDF 提取所有图片

```python
from pypdf import PdfReader
import os

reader = PdfReader("document.pdf")

for page_num, page in enumerate(reader.pages):
    if "/XObject" in page["/Resources"]:
        xObject = page["/Resources"]["/XObject"].get_object()
        
        for obj_name, obj in xObject.items():
            if obj["/Subtype"] == "/Image":
                try:
                    if obj["/Filter"] == "/DCTDecode":
                        ext = "jpg"
                    elif obj["/Filter"] == "/FlateDecode":
                        ext = "png"
                    else:
                        ext = "bin"
                    
                    filename = f"page_{page_num+1}_{obj_name[1:]}.{ext}"
                    with open(filename, "wb") as img_file:
                        img_file.write(obj.get_data())
                    print(f"已保存: {filename}")
                except Exception as e:
                    print(f"提取图片失败: {e}")
```

### 场景 3: 添加水印

```python
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
import io

# 创建水印 PDF
def create_watermark(text):
    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=letter)
    c.setFont("Helvetica", 50)
    c.setFillColorRGB(0.5, 0.5, 0.5, alpha=0.3)  # 灰色半透明
    c.saveState()
    c.translate(300, 400)
    c.rotate(45)
    c.drawCentredString(0, 0, text)
    c.restoreState()
    c.save()
    packet.seek(0)
    return packet

# 添加水印
watermark_pdf = PdfReader(create_watermark("CONFIDENTIAL"))
watermark_page = watermark_pdf.pages[0]

reader = PdfReader("input.pdf")
writer = PdfWriter()

for page in reader.pages:
    page.merge_page(watermark_page)
    writer.add_page(page)

with open("watermarked.pdf", "wb") as output:
    writer.write(output)
```

### 场景 4: 压缩 PDF

```python
from pypdf import PdfReader, PdfWriter

reader = PdfReader("large.pdf")
writer = PdfWriter()

for page in reader.pages:
    # 压缩图片
    page.compress_content_streams()
    writer.add_page(page)

# 设置压缩选项
writer.add_metadata({"/Creator": "Compressed PDF"})

with open("compressed.pdf", "wb") as output:
    writer.write(output)
```

---

## 故障排除

### 问题: 中文显示为方块

**解决方案**: 使用支持中文的字体

```python
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import getSampleStyleSheet

# 注册中文字体
pdfmetrics.registerFont(TTFont('SimSun', 'C:\\Windows\\Fonts\\simsun.ttc'))

styles = getSampleStyleSheet()
style = styles['Normal']
style.fontName = 'SimSun'

text = Paragraph("你好，世界！", style)
```

### 问题: 提取的文本乱码

**解决方案**: 尝试不同的编码或使用 pdfplumber

```python
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    for page in pdf.pages:
        # pdfplumber 通常能更好地处理编码问题
        text = page.extract_text()
        print(text)
```

### 问题: 表格提取不完整

**解决方案**: 调整表格提取参数

```python
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    for page in pdf.pages:
        # 调整表格设置
        tables = page.extract_tables({
            "vertical_strategy": "lines",
            "horizontal_strategy": "lines",
            "snap_tolerance": 3,
        })
        for table in tables:
            print(table)
```

---

## 最佳实践

1. **选择合适的工具**
   - 基本操作: pypdf
   - 文本/表格提取: pdfplumber
   - 创建 PDF: reportlab
   - 批量处理: 命令行工具

2. **处理大文件**
   - 使用流式处理避免内存溢出
   - 分批处理页面
   - 及时关闭文件

3. **错误处理**
   - 始终使用 try-except 块
   - 验证 PDF 文件完整性
   - 处理加密 PDF 时提供密码

4. **性能优化**
   - 缓存重复读取的文件
   - 使用多线程处理多个文件
   - 压缩输出文件

---

## 相关资源

- 官方文档: https://skills.sh/anthropics/skills/pdf
- pypdf: https://pypdf.readthedocs.io/
- pdfplumber: https://github.com/jsvine/pdfplumber
- reportlab: https://www.reportlab.com/docs/
- qpdf: http://qpdf.sourceforge.net/
