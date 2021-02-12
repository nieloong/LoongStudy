## nvm，node，npm之间的区别。

> 1. nvm：nodejs 版本管理工具。
也就是说：一个 nvm 可以管理很多 node 版本和 npm 版本。
> 2. nodejs：在项目开发时的所需要的代码库
> 3. npm：nodejs 包管理工具。
在安装的 nodejs 的时候，npm 也会跟着一起安装，它是包管理工具。
npm 管理 nodejs 中的第三方插件

#### nvm、nodejs、npm的关系：

nvm 管理 nodejs 和 npm 的版本。npm 可以管理 nodejs 的第三方插件。

### 安装 nvm

#### 安装命令：

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

or Wget:

```shell
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

**注意后面的“v0.33.8”这是nvm的版本号，当前最新版本是v0.33.8**

详见：[https://github.com/creationix/nvm/blob/master/README.md](https://github.com/creationix/nvm/blob/master/README.md01)

安装过程如图：

![安装nvm.png](http://image.nie-long.com/npm/Mac%20OS%20下%20NVM%20的安装与使用/iShot2021-02-12%2011.59.25.png)

**安装完成后关闭终端，重新打开终端**输入 `nvm` 验证一下是否安装成功，当出现“<font color=red>Node Version Manager</font>”时，说明已安装成功。

![安装成功.png](http://image.nie-long.com/npm/Mac%20OS%20下%20NVM%20的安装与使用/3626034-481ea40c1536327b.png)

如果在新的终端输入 nvm 时提示：<font color=red>command not found: nvm</font>，有可能是以下原因之一：

- 你的系统可能缺少一个 **.bash_profile** 文件，你可以创建一个此文件（可通过`vi`或`vim`命令），打开复制粘贴以下代码（安装nvm成功后终端的最好3行代码）进去，保存，然后再次运行安装命令；

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

##### 注意：如果你安装了 oh my zsh ，需要在 .zshrc 文件去添加以上配置信息，（一般安装成功都会自动写入这个文件最底部）如下图示：

![写入配置信息.png](http://image.nie-long.com/npm/Mac%20OS%20下%20NVM%20的安装与使用/3626034-3b8152d932c8c20f.png)

- 你可能需要重新打开一个 **terminal** 窗口或标签页

如果上面没有解决问题，打开你的 **.bash_profile** 文件，并添加以下代码：
`source ~/.bashrc`，更改完记得保存更改哦😁😁😁

#### nvm 常用命令

- `nvm install stable` ## 安装最新稳定版 node，当前是node v9.5.0 (npm v5.6.0)

- `nvm install <version>` ## 安装指定版本，可模糊安装，如：安装v4.4.0，既可nvm install v4.4.0，又可nvm install 4.4

- `nvm uninstall <version>` ## 删除已安装的指定版本，语法与install类似

- `nvm use <version>` ## 切换使用指定的版本node

- `nvm ls` ## 列出所有安装的版本

- `nvm ls-remote` ## 列出所有远程服务器的版本（官方node version list）

- `nvm current` ## 显示当前的版本

- `nvm alias <name> <version>` ## 给不同的版本号添加别名

- `nvm unalias <name>` ## 删除已定义的别名

- `nvm reinstall-packages <version>` ## 在当前版本 node 环境下，重新全局安装指定版本号的 npm 包

#### ***查看更多命令可在终端输入nvm，可参照上图👆安装成功图示***

看看自己装过哪些版本和远程服务器所有的版本

![查看远程服务器所有版本.png](http://image.nie-long.com/npm/Mac%20OS%20下%20NVM%20的安装与使用/111.png)

安装最新稳定版 node

![安装最新稳定版 node.png](http://image.nie-long.com/npm/Mac%20OS%20下%20NVM%20的安装与使用/222.png)