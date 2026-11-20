
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/UniNexora/'
    : '/',
  productionSourceMap: false,
  lintOnSave: false,
  transpileDependencies: true
};
