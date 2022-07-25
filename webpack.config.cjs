const path = require("path");
// add webpack import
const webpack = require('webpack') 

module.exports = {
  entry: './src/index.js',
  output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     publicPath: '/dist/',
   },
   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
  },
};
