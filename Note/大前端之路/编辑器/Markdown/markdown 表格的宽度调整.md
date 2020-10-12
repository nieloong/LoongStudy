> &emsp;&emsp;简书 markdown 表格宽度总是按照单元格里面文字多少分配宽度，测试了很多方法，只发现这个方法在简书里面有效，其他的方法，例如 img、div、css 还是 table 什么的，在简书里面测试都无效。

&emsp;&emsp;表格里面只需要任意一行文字当中想扩宽的单元格填充 `&nbsp;` 就可以了，其他行都不用处理。

## 普通的表格文字少的窄，文字多的宽

```markdown
标题1 | 标题2 | 标题3
- | :-: | -:
左 | 居中的文字 | 靠右的文字
a | b | c
1 | 2 | 3
```

效果如下：

标题1 | 标题2 | 标题3
- | :-: | -:
左 | 居中的文字 | 靠右的文字
a | b | c
1 | 2 | 3

- - -
- - -

## 让文字少的第一列宽一些

```markdown
标题1 | 标题2 | 标题3
- | :-: | -:
左 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | 居中的文字 | 靠右的文字
a | b | c
1 | 2 | 3
```

效果如下：

标题1 | 标题2 | 标题3
- | :-: | -:
左 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | 居中的文字 | 靠右的文字
a | b | c
1 | 2 | 3

- - -
- - -

## 让文字少的第一列宽一些，并且居中

```markdown
标题1 | 标题2 | 标题3
:-: | :-: | -:
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 中 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | 居中的文字 | 靠右的文字
a | b | c
1 | 2 | 3
```

效果如下：

标题1 | 标题2 | 标题3
:-: | :-: | -:
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 中 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | 居中的文字 | 靠右的文字
a | b | c
1 | 2 | 3

- - -
- - -

## 让文字少的第一列宽一些，并且靠右

```markdown
标题1 | 标题2 | 标题3
-: | :-: | -:
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 右 | 居中的文字 | 靠右的文字
a | b | c
1 | 2 | 3
```

效果如下：

标题1 | 标题2 | 标题3
-: | :-: | -:
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 右 | 居中的文字 | 靠右的文字
a | b | c
1 | 2 | 3

- - -
- - -

## 含有长篇文字的表格

```markdown
标题1 | 标题2
- | -
短篇内容 | 这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容
内容1 | 内容2
a | b
1 | 2
```

效果如下：

标题1 | 标题2
- | -
短篇内容 | 这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容
内容1 | 内容2
a | b
1 | 2

- - -
- - -

## 让第一列宽一些

```markdown
标题1 | 标题2
- | -
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br>短篇内容 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | 这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容
内容1 | 内容2
a | b
1 | 2
```

效果如下：

标题1 | 标题2
- | -
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br>短篇内容 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | 这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容
内容1 | 内容2
a | b
1 | 2

- - -
- - -

## 让第一列宽一些，并且居中

```markdown
标题1 | 标题2
:-: | -
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br>短篇内容<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | 这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容
内容1 | 内容2
a | b
1 | 2
```

效果如下：

标题1 | 标题2
:-: | -
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br>短篇内容<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | 这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容，这是长篇内容
内容1 | 内容2
a | b
1 | 2