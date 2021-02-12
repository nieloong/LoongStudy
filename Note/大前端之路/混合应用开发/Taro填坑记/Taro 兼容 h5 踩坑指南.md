## Taro v2.2.10官方文档
[Taro v2.2.10](https://taro-docs.jd.com/taro/docs/2.2.11/README) 京东凹凸实验室
## 解决跨域问题
h5 发请求会报跨域问题，需要使用代理转换请求。

编辑根目录下的 config/index.js 文件

```javascript
h5: {
    devServer: {
        host: 'localhost',
        port: 10086,
        proxy: {
            '/api/v1': {
                target: 'http://localhost:8000',  // 服务端地址
                changeOrigin: true
            }
        }
    },
}
```
* 代理前的请求：http://localhost:10086/api/v1/user

* 代理后的请求：http://localhost:8000/api/v1/user

## 样式单位
小程序里规定 1px = 2rpx，Taro 对于像素（px）有一套自己的规则。

在 Taro 里可以写 rpx 作为单位。

* Taro 代码转小程序代码：无缝转换为小程序单位；
* Taro 代码转 h5 代码：无法转换。

``` css
// taro
height: 10rpx;
 
// weapp
height: 10rpx;
 
// h5
// 无法转换单位
```
在 Taro 里写 px 作为单位。

* Taro 代码转小程序代码：1px = 1rpx，这一点和小程序文档里介绍的规则不一样；
* Taro 代码转 h5 代码：会自动将 px 转换为 ``` rem ``` 单位。

```css
// taro 
height: 10px;
 
// weapp
height: 10rpx;
 
// h5
height: 0.625rem;
```
在 Taro 里写 PX (大写字母)作为单位。

* Taro 代码转小程序代码：1PX = 2rpx；
* Taro 代码转 h5 代码：1PX = 1px。

```css
// taro
height: 10PX;
 
// weapp
hegiht: 20rpx;
 
// h5
height: 10px;
```
实际开发中。如果你是将小程序端代码用 Taro 重写一遍，直接将小程序里面的样式文件复制到 Taro 里，并且将所有的 rpx 替换成 px，即可同时适应小程序端和 h5 端。

## 样式冲突
h5 页面源代码如下：


![image](https://oscimg.oschina.net/oscnet/70ee8bb9f22b2349659e81a35aa48a1b38b.jpg)


可以看到，一个 class="taro_pages" 就是一个页面，所有页面都写在✍️同一个 html 页面内，通过 display: "none" 隐藏暂时不需要的页面。

so，不同页面的样式名（class）如果一样，页面之间会互相影响。

官方提供 [CSS Module](https://nervjs.github.io/taro/docs/css-modules.html) 的写法来避免样式名称重复的问题，不过个人感觉这样写起来很难看。

实际开发中，我会将每个样式都加上该页面的英文单词作为前缀。比如页面书架（shelf）页面，样式名称原本为 class="novel-list"，拼接之后就变成 class="shelf_novel-list"。
## 窗口高度
* 小程序端有头部导航条和底部导航条，下左图；
* h5 端默认是没有头部导航条的，下右图。

![image](https://oscimg.oschina.net/oscnet/8f5c720434f16bb6e912217934055be1d50.jpg)
![image](https://oscimg.oschina.net/oscnet/d0caee585f7706f4305467553f4fea76784.jpg)

二者实际存储内容的高度不同，会导致部分页面变形，可以使用下面?的方法获取窗体高度自行修改 css 样式高度。
```javascript
// utils/common.js
import Taro from '@tarojs/taro'
 
export function getWindowHeight(showTabBar = true) {
    const TAB_BAR_HEIGHT = 50
    const NAVIGATOR_HEIGHT = 44
    const info = Taro.getSystemInfoSync()
    const { windowHeight, statusBarHeight } = info
    const tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0
  
    if (process.env.TARO_ENV === 'rn') {
      return windowHeight - statusBarHeight - NAVIGATOR_HEIGHT - tabBarHeight
    }
  
    if (process.env.TARO_ENV === 'h5') {
      return `${windowHeight - tabBarHeight}px`
    }
  
    return `${windowHeight}px`
}

```
## 不同端加载不同组件
使用场景：
* 小程序端点击按钮会显示用户昵称和头像；
* H5 里没有这个 API，二者应当生成不同的页面。

##### 方法一：不同端写不同的组件。下方代码示例，在 index.js 中引入组件，Taro 会自动根据不同环境获取不同的组件。
```javascript
|-- shelf
    |-- components
        |-- header.weapp.js
        |-- header.h5.js
    |-- index.js
 
// index.js
import header from './components/header'
```
##### 方法二：根据 process.env.TARO_ENV 环境变量，渲染不同子组件。
```javascript
// index.js
 
// ....
if (process.env.TARO_ENV === 'weapp') {
    // 微信小程序端执行逻辑
} else if (process.env.TARO_ENV === 'h5') {
    // h5 端执行逻辑
} else if (process.env.TARO_ENV === 'rn') {
    // react-native 端执行逻辑
}
```
上面两种方法乍看起来，大多数人都会选择第一种，会觉得第二种方法很复杂。

dk 在实际开发中发现：

* 第一种反而更麻烦，组件并不仅仅只是渲染页面，还要处理按钮点击事件，父子组件的状态值传递等等，并没有想象中简单；
* 第二种看起来好像要对每种环境都做单独判断，实际开发中 h5 端和 rn 端的逻辑几乎是一样的，也就是只要判断两种情况：weapp 端和非 weapp 端即可。

## 封装不同的请求方法
使用场景：
* 微信小程序端登录需要使用 code 去拿 openId，进而获取 token 和 userId，小程序端的登录操作是隐式的；
* h5 端和 rn 端需要提供登录、注册等功能，用户需要显式登录之后，才能进行之后的操作。
请求库封装必不可少，开发者不希望每次请求都手动获取 token，亦或是手动添加请求头类型，像这种公共操作可以封装一个请求库。

参考代码：[request.js](https://github.com/dkvirus/py-novel/blob/master/client_mobile_taro/src/utils/request.js)

## POST 请求无法携带参数
* 小程序端非 GET 请求默认会把参数当做 json 传递；
* h5 端 [官方文档](https://taro-docs.jd.com/taro/docs/apis/network/request/request.html) 上写着默认也是 json 传递，实测并不是。 在浏览器 Network 中发现请求体的 Content-Type 为 text/plain，参数被当做字符串传递了。

解决方法：手动设置请求头类型。
```javascript
header: {
    'content-type': 'application/json'
}
```
## componentDidShow() 不生效
实际开发中，在笔记本电脑上用浏览器模拟移动端时 componentDidShow() 都是生效的，代码部署到线上，在手机上访问网站，发现 componentDidShow() 不生效。我测试了百度浏览器和谷歌浏览器，都不生效。

暂时还没找到替代的方案，如果你有 componentDidShow() 在 h5 端的替代方案，希望可以留言告知我(email: [641728086@qq.com](mailto:641728086@qq.com))

## onPullDownRefresh() 不生效
在 pc 端浏览器以及真机上测试下拉刷新都不生效，并且下拉之后，页面没有回去（头部空白部分）。

![image](https://oscimg.oschina.net/oscnet/f0056da23916650ada20d8f95dd76cf93d2.jpg)