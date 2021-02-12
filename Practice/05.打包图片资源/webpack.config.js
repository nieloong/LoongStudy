/*
 * @Author: nieloong@aliyun.com
 * @Date: 2020-10-04 00:29:01
 * @LastEditors: Loong Nie
 * @LastEditTime: 2020-10-04 01:41:00
 * @FilePath: /LoongStudy/Practice/05.打包图片资源/webpack.config.js
 * @Descripttion:
 * @version:
 */

const {resolve} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
  entry:'./src/main.js',
  output:{
    filename:'built.js',
    path:resolve(__dirname,'build')
  },
  module:{
    rules:[
      {
        test:/\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        // 问题：默认处理不了html中img图片
        // 处理图片资源
        test:/\.(jpg|png|gif)$/,
        // 下载url-loader 依赖file-loader
        loader:'url-loader',
        options:{
          // 图片大小小于8Kb，就会被转base64处理
          // 优点：减小请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片上commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片的哈希值hash的前10位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]'
        }
      },
      {
        test:/\.html$/,
        // 专门处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
        loader:'html-loader'
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