<!--
 * @Author: nieloong@aliyun.com
 * @Date: 2020-10-12 10:45:51
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-10-12 10:53:39
 * @FilePath: /LoongStudy/Note/大前端之路/打包工具/webpack/webpack打包速度的优化-happyPack.md
 * @Descripttion:
 * @version:
-->
## webpack打包优化的目的

* (1). 使打包的体积更小；

* (2). 使打包的速度更快；

### **1. 如何使打包的速度更快:**

(1). 用happypack提升项目的构建速度；happypack只作用在loader上，使用多个进程同时对文件进行编译处理；

比如：用babel-loader处理js类型的文件时，

可忽略node_modules文件夹；并且对该loader使用happypack处理；

## happypack使用的步骤：

* a. 安装happypack插件： `npm install happypack --save-dev`

```shell
// 创建 happypack 共享进程池，其中包含 6 个子进程,即多个 HappyPack 实例都使 用同一个共享进程池中的子进程去处理任务，以防止资源占用过多
const happyThreadPool = HappyPack.ThreadPool({ size: 6 });
```

* b. 在webpack.base.config.js配置文件中引入：

```shell
 const HappyPack = require('happypack');
```

* c. 在module模块中配置时，对js类型的文件使用

```shell
module: {
    rules: [
        { test: /\.js$/, //把对.js 的文件处理交给id为babel 的HappyPack 的实例执行
        use: ['happypack/loader?id=babel'], //排除 node_modules 目录下的文件
        exclude: /node_modules/
      }]
}
```

* d. 在plugins插件中使用happypack实例

```shell
plugins:[
    new HappyPack({
      // id 标识符，要和 rules 中指定的 id 对应起来
      id: 'babel',
      // 需要使用的 loader，用法和 rules 中 Loader 配置一样 // 可以直接是字符串，也可以是对象形式
      loaders: ['babel-loader?cacheDirectory'],  //共享进程池
      threadPool: happyThreadPool
    })
]
```

# happypack配置的相关参数说明：

* `id`：String 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件.

* `loaders`: Array 用法和 webpack Loader 配置中一样.

* `threads`: Number 代表开启几个子进程去处理这一类型的文件，默认是3个，类型必须是整数。

* `verbose`: Boolean 是否允许 HappyPack 输出日志，默认是 true。

* `threadPool`: HappyThreadPool 代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。

* `verboseWhenProfiling`: Boolean 开启webpack --profile ,仍然希望HappyPack产生输出。

* `debug`: Boolean 启用debug 用于故障排查。默认 false。

# 示例

## 改造`webpack.config.js`，实现多线程打包js

```shell
let HappyPack = require('happypack');

module.exports = {
    ...
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'HappyPack/loader?id=js'//这个id=js就代表这是打包js的
            }
        ]
    },
    plugins:[
        new HappyPack({这个id:js就代表这是打包js的
            id:'js',//
            use:[{//use是一个数组，这里写原先在rules的use里的loader配置
                loader:'babel-loader',
                options:{
                    presets:[
                        '@babel/presets-env',
                        '@babel/presets-react'
                    ]
                }
            }]
        })
    ]
}
```

## 实现js和css的多线程打包

```shell
let HappyPack = require('happypack');

module.exports = {
    ...
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'HappyPack/loader?id=js'//这个id=js就代表这是打包js的
            },
            {
                test:/\.css$/,
                use:'HappyPack/loader?id=css'//这个id=css就代表这是打包css的
            }
        ]
    },
    plugins:[
        new HappyPack({这个id:js就代表这是打包js的
            id:'css',//
            use:['style-loader','css-loader']
        }),
        new HappyPack({这个id:js就代表这是打包js的
            id:'js',//
            use:[{//use是一个数组，这里写原先在rules的use里的loader配置
                loader:'babel-loader',
                options:{
                    presets:[
                        '@babel/presets-env',
                        '@babel/presets-react'
                    ]
                }
            }]
        })
    ]
}
```