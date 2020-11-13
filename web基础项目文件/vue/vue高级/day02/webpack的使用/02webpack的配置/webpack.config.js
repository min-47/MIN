const path = require('path')
module.exports = {
  entry:'./src/main.js',
  output:{
    // 动态获取路径，导入包
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  }
}