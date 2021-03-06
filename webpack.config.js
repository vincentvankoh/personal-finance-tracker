const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    },
  resolve: {
    extensions: ['.js', '.jsx'],
    },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        },
    ],
  }, 
  devServer : {
      port: 8080,
      open: true, 
      hot: true,
      historyApiFallback: true,
      publicPath: '/build/',
      proxy: {
        '/logout' : {target : 'http://localhost:3000'},
        '/auth/google': {
          target: 'http://localhost:3000'
        }
      }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
