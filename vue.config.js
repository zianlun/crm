const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,     //关闭eslint校验
  devServer: { 
      proxy: {
        '/crm': {
          target:'http://10.21.24.193:8000',
          ws:false,
          changeOrigin: true
        }
      }
    }
})
