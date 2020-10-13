<!--
 * @Author: nieloong@aliyun.com
 * @Date: 2020-10-13 17:18:59
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-10-13 17:27:55
 * @FilePath: /LoongStudy/Note/大前端之路/npm/NPM关于dependencies 和 devDependencies配置详解，弄懂npm -S与-D的区别.md
 * @Descripttion:
 * @version:
-->
# NPM关于dependencies 和 devDependencies配置详解，弄懂npm -S与-D的区别

使用任何框架之前，都要经历环境搭建的过程，而在前端框架的环境搭建中（比如`React`、`Vue`等），`NPM`是必不可少的依赖包管理工具。我们在使用`NPM`命令安装依赖包时，经常会用到 `-S` 或者是 `-D` 这些指令，例如，我们安装`webpack`时会执行以下命令：

```shell
npm install -D webpack
```

对于前端初学者来说，可能还不太理解什么时候使用 `-D` ，什么时候使用 `-S` ，以及二者之间的区别。这就和我们这篇文章要讲的主题有关系了，`NPM`中的 `dependencies` 和 `devDependencies` 配置。

## 1. 什么是NPM

简单来说，`NPM`（Node Package Manager）是包含在`Node.js`里面的一个包管理工具，`NPM`会随着`Node.js`一起安装。`NPM`为开发者提供了一个代码模块共享的大平台，当我们项目中需要使用某个模块（`JavaScript`包）时，可以直接使用`NPM`包管理工具来下载对应的包并安装，我们也可以把自己用`Node.js`写的代码发布到平台上供他人使用。

## 2. package.json文件

搭建一个前端项目之前，通常会在项目的根目录下生成一个名为`package.json`的文件作为`NPM`包的描述文件，使用该文件来定义项目信息、配置包依赖关系。`package.json`文件可以自己手动创建，也可以使用命令来创建：

```shell
npm init
```

文件中包含了`NPM`包的基本信息（项目名称、版本号、项目描述、作者）和依赖管理，例如：

```json
{
    "name": "demo",
    "version": "1.0.0",
    "devDependencies": {
        "webpack": "^4.29.6"
    }
}
```

在package.json文件中，所有的依赖包都会在 dependencies 和 devDependencies 的配置项中进行管理，它们的意思是：

* **dependencies**： 表示生产环境下的依赖管理；

* **devDependencies**： 表示开发环境下的依赖管理；

## 3. 开发环境和生产环境

很多同学不太理解什么是开发环境和生产环境，简单来说，就是在项目的开发阶段就是开发环境；项目上线了，开始正式提供对外服务，上线后的阶段就是生产环境。在生产环境下，一般会关掉错误报告，打开错误日志等操作。

`devDependencies`配置的是开发环境，安装项目开发时所依赖的模块。比如像`webpack`工具，只是用来构建项目和打包，这些都是在开发阶段才使用的，等项目上线后就用不到`webpack`工具了，那么我们就可以把`webpack`安装到开发环境中，使用 `--save-dev`命令安装到`devdependencies`下，命令语法：

```shell
npm install --save-dev packageName
# 简写
npm i -D packageName
```

`dependencies`配置的是生产环境，安装项目运行时所依赖的模块。比如`jQuery`库，等项目上线以后依然是要继续使用的，我们就要安装在生产环境中，如果没有把需要的依赖安装到生产环境中，项目上线运行时就有可能会报错。使用 `--save` 命令安装到 `dependencies` 下，命令语法：

```shell
npm install --save packageName
# 简写
npm i -S packageName
```

> 注：上面的 `-S` ，是大写的S

## 总结

|配置项|命令|描述|
|:---|:---|:---|
|**devDependencies**|`--save-dev` 简写 `-D`|开发环境，管理的依赖包仅在开发阶段有效|
|**dependencies**|`--save` 简写 `-S`|生产环境，管理的依赖包在项目上线后依然有效|

掌握了原理，在开发中我们就可以根据需求，来正确使用指令安装依赖包，防止以后出现不可预知的问题。
