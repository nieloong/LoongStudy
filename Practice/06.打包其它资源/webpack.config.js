/*
 * @Author: nieloong@aliyun.com
 * @Date: 2020-10-09 01:07:30
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-10-10 15:02:05
 * @FilePath: /LoongStudy/Practice/06.打包其它资源/webpack.config.js
 * @Descripttion:
 * @version:
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  entry:'./src/main.js',
  output:{
    filename:'built.js',
    path:resolve(__dirname,'build')
  },
  module: {
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      // 打包其它资源（除了html/css/js资源以外的资源）
      {
        // 排除css/js/html资源 exclude
        exclude: /\.(css|js|html)$/,
        loader:'file-loader',
        options:{
          name:'font/[hash:5].[ext]'
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  mode:'development'
}