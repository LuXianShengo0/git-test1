// vue.config.js
module.exports = {
  publicPath: './',
  devServer: {
    //代理跨域
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,  //是否跨域
      },
    },
  },
}