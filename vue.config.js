
module.exports = {
  // 是否触发eslint检查
  lintOnSave: false,
  publicPath:"./",
  outputDir:'dist',
  // 存放index.html模板的路径
  indexPath: 'index.html',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}