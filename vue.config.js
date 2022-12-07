const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: './'
};

chainWebpack: config => {			
  if (process.env.NODE_ENV === 'production') {			
    config.module.rule('vue').uses.delete('cache-loader');			
    config.module.rule('js').uses.delete('cache-loader');			
    config.module.rule('ts').uses.delete('cache-loader');			
    config.module.rule('tsx').uses.delete('cache-loader');			
  }			
}