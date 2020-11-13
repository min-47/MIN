const path = require('path')
module.exports = {
  entry:'./src/main.js',
  output:{
    // 动态获取路径，导入包
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将CSS文件进行加载
        // style-loader负责将样式添加到dom中
        // 使用多个loader时，是从右向左
        use: [ 'style-loader', 'css-loader' ]
      },
      
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      }

    ]
  }
}