//导入处理路径模块
var path = require('path');
//__dirname: 文件的绝对路径
// console.log('__dirname ==> ', __dirname);

module.exports = {
  //生产模式
  mode: 'production',

  //配置入口
  entry: {
    index: './app/app.js'
  },

  //打包输出目录
  output: {
    //输出文件路径
    path: path.resolve(__dirname + '/public'),
    
    //输出文件名
    //[name]表示输出文件名和配置入口的键名一致
    // filename: '[name].js'

    // filename: 'ab.js'

    //输出带有hash
    // filename: 'ab.[hash].js'

    filename: '[name][hash].js'
  }
}