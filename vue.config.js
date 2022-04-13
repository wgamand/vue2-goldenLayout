
module.exports = {
  // 是否触发eslint检查
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir:'dist',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ['golden-layout/lib/jquery', 'default']
      })
    ]
  }
}