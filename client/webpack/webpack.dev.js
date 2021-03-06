const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    disableHostCheck: true,
    compress: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
