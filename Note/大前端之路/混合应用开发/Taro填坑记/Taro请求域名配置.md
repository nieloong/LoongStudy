## 背景
使用Taro进行小程序的开发，调用后端api获取信息，开发，测试，正式环境的域名是不同的。最初始的版本中，我们在不同环境中不断修改域名信息。这样造成一个问题，提交审核的时候我们一定要记得将域名改成正式版，不然会出现问题。这种人为控制，显然不能保证百分百没有问题。我们就考虑是不是可以通过process.env来区分不同的环境

## 尝试使用process.env解决问题
##### 修改配置文件
原配置文件
```javascript
export const baseUrl = 'https://release.com/';
```
修改后配置文件
```javascript
let baseUrlPrefix = ''
const env = process.env.NODE_ENV === 'development' ? 'development' : 'production'
console.log(process.env.NODE_ENV)
switch (env) {
    case 'development':
        baseUrlPrefix = 'http://dev.com/'
        break
    case 'production':
        baseUrlPrefix = 'https://release.com/' 
        break
}
export const baseUrl = baseUrlPrefix
```
##### 执行命令查看
执行命令
```shell
npm run dev:weapp
```
发现控制台输出的process.env.NODE_ENV=development

执行命令
```shell
npm run build:weapp
```
发现控制台输出的process.env.NODE_ENV=production

执行结果说明一个问题，我们是可以通过process.env进行判断的开发环境和正式环境

那么我们遗留下来一个问题：测试环境怎么办？

## 测试环境怎么设置
##### 执行npm run dev和build的区别
查看package.json文件
```json
"scripts": {
    "build:weapp": "taro build --type weapp",
    "dev:weapp": "npm run build:weapp -- --watch"
 }
 ```
可以看出，dev和build的差别就是--watch，那么是不是--watch设置的process.env？

##### --watch为什么使process.env=development
查看源码 taro-build
```javascript
program
  .option('--type [typeName]', 'Build type, weapp/swan/alipay/tt/h5/quickapp/rn/qq/jd')
  .option('--watch', 'Watch mode')
  .option('--page [pagePath]', 'Build one page')
  .option('--component [pagePath]', 'Build one component')
  .option('--env [env]', 'Env type')
  .option('--ui', 'Build Taro UI library')
  .option('--ui-index [uiIndexPath]', 'Index file for build Taro UI library')
  .option('--plugin [typeName]', 'Build Taro plugin project, weapp')
  .option('--port [port]', 'Specified port')
  .option('--release', 'Release quickapp')
  .parse(process.argv)

const { type, watch, ui, port, release, page, component, uiIndex } = program
let { env, plugin } = program

env = process.env.NODE_ENV || env

if (env) {
  process.env.NODE_ENV = env
} else {
  if (watch) {
    process.env.NODE_ENV = 'development'
  } else {
    process.env.NODE_ENV = 'production'
  }
}
```
这里可以看到当env不存在的时候，如果执行参数里面有watch就设置process.env.NODE_ENV = 'development'，否则就是'production'。

到这里你是不是发现了什么端倪？

##### 端倪
除了--watch之外，taro执行build命令的时候还接受一个参数--env，设置当前所在环境的，那么我们的测试环境是不是可以通过这个参数设置来实现呢？

我们来修改一下package.json
```json
"scripts": {
    "build:weapp": "taro build --type weapp",
    "dev:weapp": "npm run build:weapp -- --watch",
    "test:weapp": "npm run test:weapp -- --watch --env test"
 }
```
修改配置文件
```javascript
let baseUrlPrefix = ''
const env = process.env.NODE_ENV === 'development' ? 'development' : (process.env.NODE_ENV === 'test' ? 'test' : 'production')
console.log(process.env.NODE_ENV)
switch (env) {
    case 'development':
        baseUrlPrefix = 'http://dev.com/'
        break
    case 'test':
        baseUrlPrefix = 'https://test.com/' 
        break
    case 'production':
        baseUrlPrefix = 'https://release.com/' 
        break
}
export const baseUrl = baseUrlPrefix
```
执行命令
```shell
npm run test:weapp
```
想象一下打印出来的process.env.NODE_ENV是什么？

发生了什么？
process.env.NODE_ENV = 'production'，为什么？

我们来看看我们的应用的config文件夹里面的index.js做了什么
```javascript
module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}
```
我们设置的process.env.NODE_ENV应该是test，走到这里webpack的配置文件使用的是prod的配置，我们看看prod.js里面写了什么
```javascript
module.exports = {
    env: {
        NODE_ENV: '"production"'
    },
    defineConstants: {
    },
    mini: {},
    h5: {
        /**
         * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
         * 参考代码如下：
         * webpackChain (chain) {
         *   chain.plugin('analyzer')
         *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
         * }
         */
    }
}
```
看到了吗，这里把NODE_ENV又重置成了production，我们来尝试调整

增加test配置
增加test.js配置在config文件夹中
```javascript
module.exports = {
    env: {
        NODE_ENV: '"test"'
    },
    defineConstants: {
    },
    mini: {},
    h5: {}
}
```
修改index.js
```javascript
module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    } else if (process.env.NODE_ENV === 'test') {
        return merge({}, config, require('./test'))
    }
    return merge({}, config, require('./prod'))
}
```