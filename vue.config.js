module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(1000000)
      .maxAssetSize(1000000)
  }
}
