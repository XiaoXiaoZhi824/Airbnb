const path = require('path');
const resolve = pathname => path.resolve(__dirname, pathname);
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'assets': resolve('assets'),
      'services': resolve('services'),
      'components': resolve('components'),
      'hooks': resolve('hooks'),
      'utils': resolve('utils')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ]
}
