import loong from './loong'
import '../font/iconfont.css'
import '../css/index.less'

const add = (x,y) => {
  return x * y
}

loong()

console.warn('[loong]:' + add(8,2))

// 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
if(module.hot){
  // 方法会监听 loong.js 文件的变化，一旦发生变化，其它模块不会重新打包构建
  module.hot.accept('./loong.js',function () {
    // 会执行后面的回调函数
    loong()
  })
}