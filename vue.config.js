const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  devServer:{
    proxy:{
      "/adminapi":{
        target:"http://127.0.0.1:3000",
        changeOrigin:true //默认changeOrigin的值是true,意味着host设置成target
      }
    }
  }
})
