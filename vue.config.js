module.exports = {
  configureWebpack: config => {
    // 如果需要引入 vux UI (目前vux 不支持 Vue cli 3.X 不建议使用)
    // 如果需要引入需要安装：`yarn add vux-loader yaml-loader less less-loader --dev && yarn add vux`
    //
    // require('vux-loader').merge(config, {
    //   options: {},
    //   plugins: ['vux-ui'],
    // })

    // 若需要 Webpack 在不同环境的处理不同的逻辑
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },

  // 配置 Webpack devServer
  // devServer: {
  // https: true,
  // open: true,
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:8080',
  //     pathRewrite: { '^/api': '' },
  //   },
  // },
  // },
}
