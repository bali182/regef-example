
const { join } = require('path')
// eslint-disable-next-line
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './presentation/index.jsx',
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
      {
        test: /\.css$/,
        loaders: ['style-loader', 'raw-loader'],
        include: __dirname,
      }, {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        include: join(__dirname, 'assets'),
      }, {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png',
        include: join(__dirname, 'assets'),
      }, {
        test: /\.gif$/,
        loader: 'url-loader?mimetype=image/gif',
        include: join(__dirname, 'assets'),
      }, {
        test: /\.jpg$/,
        loader: 'url-loader?mimetype=image/jpg',
        include: join(__dirname, 'assets'),
      },
    ],
  },
  plugins: [
    new HtmlPlugin({ template: 'presentation/index.html' }),
  ],
}
