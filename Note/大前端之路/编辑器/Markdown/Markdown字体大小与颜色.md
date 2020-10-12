> &emsp;&emsp;**Markdown**是一种可以使用普通文本编辑器编写的标记语言，通过类似HTML的标记语法，它可以使普通文本内容具有一定的格式。但是它本身是不支持修改字体、字号与颜色等功能的！
<br>&emsp;&emsp;**CSDN-markdown**编辑器是其衍生版本，扩展了Markdown的功能（如表格、脚注、**内嵌HTML**等等）！对，就是**内嵌HTML**，接下来要讲的功能就需要使用**内嵌HTML**的方法来实现。

### 字体、字号与颜色

```markdown
<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=#0099ff size=7 face="黑体">color=#0099ff size=72 face="黑体"</font>
<font color=#00ffff size=72>color=#00ffff</font>
<font color=gray size=72>color=gray</font>

Size：规定文本的尺寸大小。可能的值：从 1 到 7 的数字。浏览器默认值是 3。
```

&emsp;&emsp;使用简书的markdown不能改变字体颜色真是一件头疼的事，不过找了很久总算找到一种可以书写不同颜色的字的方法，语法如下：

```markdown
$\color{red}{红色字}$
```

效果：

&emsp;&emsp;$\color{red}{红色字}$

当然表示成rgb十六进制或十进制形式都是可以的：

```markdown
$\color{#FF0000}{红色字}$或$\color{rgb(255,0,0)}{红色字}$
```

$\color{#FF0000}{红色字}$

#### 简书字体及颜色

&emsp;&emsp;简书目前还不会改变文字的字体的方法，只能改变字体的颜色

说明：

- 第一个{…}可以用英文，如：red、green等，也可以颜色代码，如#0099ff(蓝色）

- 第二个{…}写入你的内容

**示例：**

$\color{red}{ 改变颜色 }$ `$\color{red}{ 改变颜色 }$`

$\color{orange}{ 改变颜色 }$ `$\color{orange}{ 改变颜色 }$`

$\color{#0099ff}{ 改变颜色 }$ `$\color{#0099ff}{ 改变颜色 }$`

**还可以改变字体大小：**

## $\color{#0099ff}{标题改变颜色}$
```markdown
## $\color{#0099ff}{标题改变颜色}$
```

<big>$\color{#0099ff}{ 汉字格式 }$</big>

```markdown
<big>$\color{#0099ff}{ 汉字格式 }$</big>
```

<small>$\color{#0099ff}{ 汉字格式 }$</small>

```markdown
<small>$\color{#0099ff}{ 汉字格式 }$</small>
```

### 背景色

&emsp;&emsp;Markdown本身不支持背景色设置，需要采用内置html的方式实现：借助 table, tr, td 等表格标签的 bgcolor 属性来实现背景色的功能。举例如下：

```markdown
<table><tr><td bgcolor=orange>背景色是：orange</td></tr></table>
```

效果如下：

<table><tr><td bgcolor=orange>背景色是：orange</td></tr></table>