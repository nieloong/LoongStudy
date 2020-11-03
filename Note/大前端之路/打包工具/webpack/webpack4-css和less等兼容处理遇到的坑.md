**遇到一个坑，查了好久才找出解决办法，话不说多，问题如下：**

```shell
ERROR in ./src/css/b.css (./node_modules/_css-loader@4.3.0@css-loader/dist/cjs.js!./node_modules/_postcss-loader@4.0.1@postcss-loader/dist/cjs.js??postcss!./src/css/b.css)
Module build failed (from ./node_modules/_postcss-loader@4.0.1@postcss-loader/dist/cjs.js):
ValidationError: Invalid options object. PostCSS Loader has been initialized using
an options object that does not match the API schema.
- options has an unknown property 'plugins'. These properties are valid:
object { postcssOptions?, execute?, sourceMap? }
at validate (C:\Users\Administrator\Desktop\Sep\...\node_modules\_schema-utils@2.7.1@schema-utils\dist\validate.js:98:11)
at Object.loader (C:\Users\Administrator\Desktop\Sep\...\node_modules\_postcss-loader@4.0.1@postcss-loader\dist\index.js:43:28)
```

**翻译：**

```shell
ValidationError:无效的选项对象。PostCSS加载程序已使用初始化

与API架构不匹配的options对象。

-options具有未知属性“plugins”。这些属性有效：{ postcssOptions?, execute?, sourceMap? }
```

### 出问题的配置：

```shell
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            //postcss的插件
                            require('postcss-preset-env')()
                        ]
                    }
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode: "development"
}
```

**问题原因：** <font color=red>官方更新了配置，所以以前的方法就不行了</font>

### 新配置：

```shell
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: 'postcss-loader',
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode: "development"
}
```

**新建文件** `postcss.config.js`

![新建文件](http://image.nie-long.com/1721024-20200909152821715-1219956589-20201031.png)

**内容为：**

```shell
module.exports = {
    plugins: [
        require('postcss-preset-env')
    ]
}
```

再次打包运行，css代码由 ![1721024-20200909152933653-168515193-20201031](http://image.nie-long.com/1721024-20200909152933653-168515193-20201031.png) 打包为 ![1721024-20200909152955745-2058746140-20201031](http://image.nie-long.com/1721024-20200909152955745-2058746140-20201031.png) ，完成。

__最后：package.json配置也发一下__

```shell
"browserslist": {
    "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
    ],
    "production": [
        ">0.1%",　　
        "not dead",
        "not op_mini all"
    ]
}
```

### 参考链接：

　　类似问题链接：[https://blog.csdn.net/weixin_43932098/article/details/102784887](https://blog.csdn.net/weixin_43932098/article/details/102784887)

　　官方最新配置链接：[https://github.com/postcss/postcss/blob/master/docs/README-cn.md](https://github.com/postcss/postcss/blob/master/docs/README-cn.md)

　　browserslist配置链接：[https://www.jianshu.com/p/bd9cb7861b85](https://www.jianshu.com/p/bd9cb7861b85)

![1721024-20200909153305779-2028649069-20201031](http://image.nie-long.com/1721024-20200909153305779-2028649069-20201031.png)
