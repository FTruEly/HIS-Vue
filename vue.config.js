module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  devServer:{
    host: '127.0.0.1',
    port: 8000,
    // proxy:{
    //   '/sm':{
    //     target:'https://sm.ms/api',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/sm':''
    //     }
    //   }
    // }
  },
};
