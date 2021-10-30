const path = require('path');

module.exports = {
  entry: './src/js/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: "umd"
  },
  module: {
    rules: [
        { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/, }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
};