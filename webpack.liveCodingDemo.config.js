
const { join } = require('path')
// eslint-disable-next-line
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './liveCodingDemo/index.jsx',
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'dist'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlPlugin({ template: 'src/index.html' }),
  ],
}
