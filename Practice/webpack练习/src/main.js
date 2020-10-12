/*
  main.js:webpack入口起点文件
  1.运行指令
  开发环境：webpack ./src/main.js -o ./build/built.js --mode=development
    webpack会以 ./src/main.js 为入口文件开始打包，打包后输出到 ./build/built.js
    整体打包环境，是开发环境
  生产环境：webpack ./src/main.js -o ./build/built.js --mode=production
    webpack会以 ./src/main.js 为入口文件开始打包，打包后输出到 ./build/built.js
    整体打包环境，是生产环境 - 压缩代码
  2.结论
    1.webpack能处理js/json，不能处理css/images等其它资源
    2.生产环境比开发环境多了一个压缩js代码；
    3.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化；
*/
import './index.css';
import './index.less';
import data from './data.json';

console.log(data);

function add(x,y) {
  return x+y;
}
console.log(add(1,9));