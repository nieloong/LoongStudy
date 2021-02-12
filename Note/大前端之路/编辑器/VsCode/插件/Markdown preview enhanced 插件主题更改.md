# MARKDOWN PREVIEW ENHANCED 插件主题更改

### 一、MARKDOWN PREVIEW ENHANCED 安装

打开VS Code后按快捷键 ctrl+shift+x 打开扩展中心，直接在搜索框输入 Markdown Preview Enhanced,点击安装

### 二、简单使用

- **VS code自带preview的使用**

  首先VS code默认是支持Markdown编辑的，但是似乎支持的语法比较有限，这也是我们安装这个插件的原因。键入快捷键ctrl+k ctrl+s就可以打开VScode中快捷键列表，在搜索框键入_preview_,即可发现

  * 键入`ctrl+shift+v`新开一个tab视窗展示现有代码的效果；

  * 键入`ctrl+k v`新开一个“偏窗”（sidewindow） 展示效果，非常方便

![58daedd09ab523cbcdfa73017b0fa7d6](http://image.nie-long.com/58daedd09ab523cbcdfa73017b0fa7d6.png)

- **Markdown Preview Enhanced 的使用**

安装之后我们再去快捷键列表去查看的时候，发现该插件和自带的展示效果快捷键是冲突的，截图如下：

![7f66792bab266566418f28f1ef3bb3e4](http://image.nie-long.com/7f66792bab266566418f28f1ef3bb3e4.png)

- **解决方案**

  更改markdown Preview Enhanced 的快捷键。提供我的给大家参考：

  * 键入`ctrl+p` `ctrl+t` 新开一个tab视窗展示;

  * 键入`ctrl+p` `ctrl+s` 新开一个“偏窗”展示。

### 三、“CODE CHUNK”功能的使用

怎么形容这个功能，有种感觉就是在使用裸露版的jupyter，可以直接展示自己引用代码的运行结果（包括绘制图形）

> 脚本运行默认是禁用的,并且需要在VSCode 的插件设置中开启来进行使用. 请小心使用这一特性，因为它很有可能造成安全问题！ 当你的脚本运行设置是开启的，你的电脑很有可能被黑客攻击，如果有人使你运行了 Markdown 文档中的恶意代码。

- **首先需要在设置中开启这个功能**

  在VS code的设置里设置名称： Enable Script Execution为勾选就可以了;

- **使用Code Chunk功能的代码块必须要使用额外形式做记认. 最基本的是{cmd=true}开启功能.**

例一:

![WX20201015-175958](http://image.nie-long.com/WX20201015-175958.png)

效果如下：

![c32743db964e83fa20d06c252d9f3988](http://image.nie-long.com/c32743db964e83fa20d06c252d9f3988.png)

例二:

![WX20201015-180352](http://image.nie-long.com/WX20201015-180352.png)

效果如下：

![7229ee1d631e198ebe96d508fc9bfe2c](http://image.nie-long.com/7229ee1d631e198ebe96d508fc9bfe2c.png)

### 四、更改“MARKDOWN PREVIEW ENHANCED”主题

- **默认主题**

![dcb3ed3d7e7fa40a1f61ad90fc0a59e6](http://image.nie-long.com/dcb3ed3d7e7fa40a1f61ad90fc0a59e6.png)

因为我个人比较喜欢深色主题，结果每次preview的时候出来一个浅色的界面，忍不了……

- **查看提供的默认主题**

键入`ctrl+`, 打开设置面板，在搜索框键入 markdown preview enhanced theme (不要问我为什么这么输入，因为我也不确定它到底能不能更改，只能指定关键字泛搜)

![e90d5cf8edee6ba24db6077e29aae516](http://image.nie-long.com/e90d5cf8edee6ba24db6077e29aae516.png)

点击那个’那个倒三角’可以查看它提供的默认主题，如下

![b5aab172c985a24609c15d4ae437e2f2](http://image.nie-long.com/b5aab172c985a24609c15d4ae437e2f2.png)

- **更改默认主题**

现在那还不是一件很容易的事情了，直接选中自己喜欢的那一个就可以。我选了‘none.css’(主要是因为他和我现在的VS code的效果很契合)，最后效果如下：

![abb87c6cd1194e16d75badd0a47e8dd8](http://image.nie-long.com/abb87c6cd1194e16d75badd0a47e8dd8.png)

### 参考文献

[1] [https://www.jianshu.com/p/7313d9840edc](https://www.jianshu.com/p/7313d9840edc)

[2] [https://blog.csdn.net/ArthurCaoMH/article/details/89300465](https://blog.csdn.net/ArthurCaoMH/article/details/89300465)

[3] 官方文档：[https://shd101wyy.github.io/markdown-preview-enhanced/#/](https://shd101wyy.github.io/markdown-preview-enhanced/#/)
