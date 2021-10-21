const path = require('path');

module.exports = {
  mode: 'development',
  entry: entry: path.resolve(__dirname, 'src') + 'client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js', // string
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080
  }
};