const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'development'

module.exports = {
  // 单入口
  entry: './src/js/main.js',
  // 多入口
  // entry: {
  //   main: './src/js/main.js',
  //   loong: './src/js/testloong.js'
  // },
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
  /*
    1. 可以将node_modules中代码单独打包成一个chunk最终输出
    2. 自动分析多入口chunk中，有没有公共的依赖文件。如果有会打包提取成单独一个chunk(有大小要求)
  */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production'
}