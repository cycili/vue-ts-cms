const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置方式一:cli提供的属性
  outputDir: './build',
  // publicPath:'./'
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api':''
        },
        changeOrigin:true
      }
    }
  },
  // 配置方式二：和webpack属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
         components:'@/components'
       }
     }
   }
});
