const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
          /*
            css兼容性处理：postcss --> postcss-loader@3.0.0 postcss-preset-env@6.7.0

            *bug*----------------------------
            Module build failed: ValidationError: PostCSS Loader Invalid Options
            options['useConfigFile'] is an invalid additional property

            原因：postcss-loader版本问题

            解决方式：npm i -D postcss-loader@3.0.0
            ---------------------------------

            帮助postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式

            "browserslist": {
              // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = 'devlopment';
              "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
              ],
              // 生产环境：默认是看生产环境
              "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
              ]
            }

          */
         // 使用loader的默认配置
         // 'postcss-loader',
         // 修改loader的配置
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
      // 对输出的css文件进行重命名
      filename: 'css/built.css'
    })
  ],
  mode: 'development'
}