const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('node-sass'), // This line must in sass option
      },
    },
    requireModuleExtension: true
  },
  devServer: {
    port: 9528,
    open: true,
    inline: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: `http://39.105.22.73:8081/`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    performance: {
      hints: false
    }
  },
  chainWebpack(config) {
    config.when(process.env.NODE_ENV === 'development', config =>
      config.devtool('cheap-source-map')
    )
    config.when(process.env.NODE_ENV !== 'development', config => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      // 压缩代码
      config.optimization.minimize(true)
      config.optimization.minimizer('terser').tap((args) => {
        // 注释console.*
        args[0].terserOptions.compress.drop_console = true
        // remove debugger
        args[0].terserOptions.compress.drop_debugger = true
        // 移除 console.log
        args[0].terserOptions.compress.pure_funcs = ['console.log']
        return args
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
