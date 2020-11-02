const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
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
  mode: 'development',
  // 开发服务器 devServer: 用来自动化（自动编译，自动打开浏览器，自动刷新浏览器～～）
  // 特点：只会在内存中编译打包，不会有任何输出
  // 启动devServer指令为：npx webpack-dev-server （本地包npx）
  devServer: {
    // 项目构建后的路径
    contentBase: resolve(__dirname,'build'),
    // 启动gzip压缩
    compress: true,
    port: 3000,
    open: true
  }
}