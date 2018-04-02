const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './resources/js/app.ts'
    ]
  },
  context: __dirname + '',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: __dirname + '/public',
    sourceMapFilename: 'bundle.map'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/ ,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!scss!sass'
      },
      {
        test: /\.html$/,
        use: [
          /* {
            loader: 'file-loader?name=[path][name].[ext]'
          },
          {
            loader: 'extract-loader',
          }, */
          {
            loader: 'html-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8008
  }
};