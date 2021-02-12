const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname,'build')
  },
  module:{
    rules:[
      /*
        语法检查 eslint-loader 依赖eslint库
          注意：只检查自己写的源代码，第三方库不管
          设置检查规则：
            package.json 中eslintConfig中设置～
              "eslintConfig": {
                "extends": "airbnb-base"
              }
            airbnb 规则-风格指南 --> eslint-config-airbnb-base eslint eslint-plugin-import
      */
     {
       test:/\.js$/,
       // ⚠️排除第三方
       exclude: /node_modules/,
       loader: 'eslint-loader',
       options: {
         // 自动修复eslint的错误
         fix: true
       }
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}