module.exports = {
  // 是否触发eslint检查
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir:'dist',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  }
}
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');