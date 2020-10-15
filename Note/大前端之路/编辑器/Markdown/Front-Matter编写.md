# Front-Matter编写

[Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)

## Pandoc Word 导出

### 概览

创建 Word 文档，你需要在 markdown 文件中的 front-matter 里声明 `word_document` 的输出类型：

```shell
---
title: "Habits"
author: John Doe
date: March 22, 2005
output: word_document
---
```

### 输出路径

你可以通过 `path` 来定义文档的输出路径。例如：

```shell
---
title: "Habits"
output:
  word_document:
    path: /Exports/Habits.docx
---
```

如果 `path` 没有被定义，那么 Word 将会在相同的文件夹下生成。

### Syntax Highlighting

你可以使用 `highlight` 选项来控制语法高亮的主题。例如：

```shell
---
title: "Habits"
output:
  word_document:
    highlight: "tango"
---
```

### Style Reference

在生成docx文件时使用指定的文件作为样式引用。为了获得最佳结果，参考docx应该是使用pandoc生成的docx文件的修改版本。引用docx的内容被忽略，但是它的样式表和文档属性（包括页边距、页面大小、页眉和页脚）在新docx中使用。如果命令行中没有指定`reference.docx`，pandoc将查找一个文件参考.docx在用户数据目录中（请参见--data dir）。如果也找不到，则将使用合理的默认值。

> Use the specified file as a style reference in producing a docx file. For best results, the reference docx should be a modified version of a docx file produced using pandoc. The contents of the reference docx are ignored, but its stylesheets and document properties (including margins, page size, header, and footer) are used in the new docx. If no reference docx is specified on the command line, pandoc will look for a file `reference.docx` in the user data directory (see --data-dir). If this is not found either, sensible defaults will be used.

```shell
---
title: "Habits"
output:
  word_document:
    reference_docx: mystyles.docx
---
```

### Pandoc Arguments

如果您希望在上面描述的YAML选项中使用缺少等效项的pandoc特性，那么您仍然可以通过传递自定义的 `pandoc_args` 来使用它们。例如：

> If there are pandoc features you want to use that lack equivalents in the YAML options described above you can still use them by passing custom `pandoc_args`. For example:

```shell
---
title: "Habits"
output:
  word_document:
    pandoc_args: [
      "--csl", "/var/csl/acs-nano.csl"
    ]
---
```

### Shared Options

如果要指定一组由目录中的多个文档共享的默认选项，可以包含一个名为`_output.yaml`在目录中。注意，这个文件中没有使用YAML分隔符或封闭的输出对象。例如：

> If you want to specify a set of default options to be shared by multiple documents within a directory you can include a file named `_output.yaml` within the directory. Note that no YAML delimeters or enclosing output object are used in this file. For example:

**_output.yaml**

```shell
word_document:
  highlight: zenburn
```

位于同一目录中的所有文档 `_output.yaml` 将继承它的选项。在文档中显式定义的选项将覆盖在共享选项文件中指定的选项。

> All documents located in the same directory as `_output.yaml` will inherit it’s options. Options defined explicitly within documents will override those specified in the shared options file.