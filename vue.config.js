const PrerenderSpaPlugin = require("prerender-spa-plugin");
const path = require('path')
const resolve = dir => path.join(__dirname, dir);
const isProduction = process.env.NODE_ENV === 'production'
const renderRoutes = (() => {
  const routes = [
    '/',
    '/form',
  ].map((route) => route.replace(/\/$/, ''))
  routes.push(...routes.map((route) => `${route}/`))
  return routes
})()

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(1000000)
      .maxAssetSize(1000000)
  },
  configureWebpack: config => {
    const plugins = []
    if (isProduction) {
      plugins.push(
        new PrerenderSpaPlugin({
          staticDir: resolve("dist"),
          routes: renderRoutes,
          registry: undefined,
          useRenderEvent: true,
          onlyProduction: true,
          postProcess(renderedRoute) {
            renderedRoute.route = renderedRoute.originalRoute
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
            }
            return renderedRoute
          },
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true
          },
          renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
            renderAfterDocumentEvent: "app-rendered",
            maxConcurrentRoutes: 20,
            headless: true,
          })
        })
      )
    }
    config.plugins = [...config.plugins, ...plugins];
  }
}
