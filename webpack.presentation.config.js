
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
    extensions: ['.js', '.jsx', '.sample', '.css', '.jpg', '.png'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.sample$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'raw-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=1000&mimetype=image/svg+xml',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=1000&mimetype=image/png',
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?limit=1000&mimetype=image/gif',
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=1000&mimetype=image/jpg',
      },
    ],
  },
  plugins: [
    new HtmlPlugin({ template: 'presentation/index.html' }),
  ],
}
