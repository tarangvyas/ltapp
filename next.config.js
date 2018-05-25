const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  webpack: (config) => {
    config.module.loaders = (config.module.loaders || []).concat({
      test: /\.css$/, loader: 'raw'
    })
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
