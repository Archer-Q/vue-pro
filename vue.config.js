// vue.config.js
const path = require('path')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/api' : '/', // 公共路径
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // 向 PWA 插件传递选项。
  chainWebpack: config => {
    config.resolve.symlinks(true) // 修复热更新失效
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap(args => {
      // 修复 Lazy loading routes Error
      args[0].chunksSortMode = 'none'
      return args
    })
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'))

    // 配置svg字体图标
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.exclude.add(/node_modules/);
    svgRule
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });

    const imagesRule = config.module.rule("images");
    imagesRule.exclude.add(resolve("src/assets/icons"));
    config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  },
  css: {
    extract: IS_PROD,
    requireModuleExtension: true, // 去掉文件名中的 .module
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      sass: {
        // data: `@import "@/assets/style.scss/index.scss";`
      }
    }
  },

  devServer: {
    open: true, // 自动打开浏览器
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: 'localhost',
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    proxy: { // 配置多个跨域
      '/api': {
        target: 'https://www.fastmock.site/mock/6146c231f01f7a4852d71a667f6bec6b/zhiyuan',
        changeOrigin: true,
        ws: true,//websocket支持
        pathRewrite: {
          '^/api': '/'
        }
      },
    }
  }
}
