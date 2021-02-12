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

/*
  缓存
    babel缓存
      cacheDirectory: true
    --> 帮助我们让第二次打包构建速度更快
    文件资源缓存
      给文件名加hash值
      hash值能让文件,每次webpack构建时会生成一个唯一的hash值。
        问题：因为js和css同时使用一个hash值。如果重新打包，会导致所有缓存失效。（可能我只改动一个文件，全部文件又变了）
      chunkhash：根据chunk生成的hash值。如果打包来源于同一个chunk（代码块），那么hash值就是一样的
        问题：js和css的hash值还是一样的
          因为css是在js中被引入的，所以同属一个chunk

      解决方案：
      contenthash:根据文件的内容生成hash值。不同文件hash值一定不一样

      -->让我们生产环境代码上线运行缓存更好利用
*/

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'js/loong.[contenthash:8].js',
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [
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
        /*
          以下loader只会匹配一个
            ⚠️注意：oneOf loader不能有两个配置处理同一种类型文件
        */
        oneOf: [
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
              ],
              /*
                开启babel缓存
                  第二次构建时，才会读取之前的缓存，从而使生产环境更快
              */
              cacheDirectory: true
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
      filename: 'css/loong.[contenthash:8].css'
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: 'production',
  devtool: 'source-map'
}