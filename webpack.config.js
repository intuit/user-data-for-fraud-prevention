const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'UserDataForFraudPrevention',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
};