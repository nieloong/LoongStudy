---
title: "Markdown常用"
author: Loongking
date: 20201015
output: word_document
---

## 标题

`# ` 标题一

`## ` 标题二

`### ` 标题三

`#### ` 标题四

`##### ` 标题五

`###### ` 标题六

## 强调
斜体 `*`seanlau`*` 或 `_`seanlau`_`

粗体 `**`seanlau`**`

<font color=red>红色强调</font> `<font color=red>红色强调</font>`

$\color{red}{红色字}$`$\color{red}{红色字}$`

## 列表
有序：`1.` `2.` `3.`

无序：`*` `+` `-`

## 换行

加两个以上的空格，然后回车

* 方法1: 连续两个以上空格+回车
* 方法2：使用html语言换行标签：`<br>`

## 首行缩进两个字符：

> (每个表示一个空格，连续使用两个即可）

1. `&ensp;` 半角的空格
2. `&emsp;` 全角的空格

示例：
> &emsp;&emsp;Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯（英语：John Gruber）。 它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。<br>
&emsp;&emsp;由于Markdown的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，目前许多网站都广泛使用Markdown来撰写帮助文档或是用于论坛上发表消息。 如GitHub、Reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge、简书等，甚至还能被使用来撰写电子书。

## 代码块+语法高亮
代码块(段落）：
> &#96;&#96;&#96;
sean
lau
&#96;&#96;&#96;

行内代码块：&#96;sean&#96; and &#96;lau&#96;

标明具体语言可高亮：&#96;&#96;&#96;java 或 &#96;&#96;&#96;javascript 或 &#96;&#96;&#96;python

## 图片+超链接+发送邮件

+ **qiniu-upload-image**

一个 VS Code 插件，编写 Markdown 时可以快捷上传本地图片获取七牛图床外链。

![demo](http://image.nie-long.com/demo.gif)

> Tips: 只有在编辑 Markdown 时插件才可使用。

### Usage

粘贴图片路径上传：`SHIFT + P`

直接选择图片上传：`SHIFT + O`

功能2 需要升级 vscode 到 v1.17+

+ 图片

```shell
![描述](http://logo.baidu.com/images/logo.png)
```

![图片示例](https://note.youdao.com/yws/api/image/normal/1564388180753?userId=weixinobU7VjsqhbCf5P0Y3rfUnnQUH_BA)

+ 超链接

```shell
[描述](http://www.nie-long.com)
```
[超链接示例](http://www.nie-long.com)

+ 发送邮件
```shell
[邮件](malito:641728086@qq.com)
```
[641728086@qq.com](malito:641728086@qq.com)

## 表格
第一行为定义表头标题，第二行为区分头部和设置对其方式，减号（-）至少有3个，冒号居左为左对齐，居右为右对齐，两端都有为居中对齐。
```shell
|s|e|a|
|:---|:---:|---:|
|l|a|u|
```
* 示例

|表头标题1|表头标题2|表头标题3|
|:---|:---:|---:|
|内容1|内容2|内容3|
|内容1|内容2|内容3|

## 分割线

`***` 或`* * *`或 `*****`或`- - -`
- - -

## 转义普通字符
|符号|含义|符号|含义|
|:---:|:---:|:---:|:---:|
|\ |反斜线&#92;|`()`|括弧|
|&#96;|反引号&#96;|`#`|井字号|
|`*`|星号|`+`|加号|
|`_`|底线|`-`|减号|
|`{}`|花括号|`.`|英文句点|
|`[]`|方括号|`!`|惊叹号|

## 网址邮址

网址：<http://www.nie-long.com>

邮址：<641728086@qq.com>

## 使用LaTex数学公式

* 行内公式：使用两个`$`符号引用公式: `$公式$`
* 行间公式：使用两对`$$`符号引用公式： `$$公式$$`