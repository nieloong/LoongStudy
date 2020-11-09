const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'development'

module.exports = {
  // 单入口
  // entry: './src/js/main.js',
  // 多入口：有一个入口，最终输出就有一个bundle
  entry: {
    main: './src/js/main.js',
    loong: './src/js/testloong.js'
  },
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: resolve(__dirname,'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production'
}