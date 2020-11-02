const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// css兼容
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// css压缩
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'development'

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要在package.json中定义“browserslist” 兼容那些浏览器
    loader:'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-preset-env')()
      ]
    }
  }
]

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'js/loong.js',
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ ...commonCssLoader ]
      },
      {
        test: /\.less$/,
        use:[ ...commonCssLoader,'less-loader' ]
      },
      /*
        正常来说，一个文件只能被一个loader处理。
        当一个文件被多个loader处理，一定要指定loader执行的先后顺序：
          先执行eslint 在执行babel
      */
      {
        // 在package.json中eslintConfig做那种语法检查 --> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options:{
          // 自动修复eslint报错
          fix: true
        }
      },
      {
        // js兼容处理
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {version: 3},
                targets: {
                  chrome: '50',
                  firefox: '50',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hase:8].[ext]',
          outputPath: 'images',
          esModule: false
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(js|jpg|png|gif|html|css|less)/,
        loader: 'file-loader',
        options: {
          outputPath: 'font'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/loong.css'
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: 'production'
}