const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// optimize-css-assets-webpack-plugin 压缩css插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// 设置nodejs环境变量
// process.env.NODE_ENV = 'development'

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'js/builts.js',
    path:resolve(__dirname,'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
         {
           loader: 'postcss-loader',
           options:{
             ident: 'postcss',
             plugins: () => [
               // postcss的插件
               require('postcss-preset-env')()
             ]
           }
         }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: 'development'
}