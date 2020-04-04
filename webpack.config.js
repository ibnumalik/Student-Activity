const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  return {
    context: path.resolve(__dirname),

    entry: {
      app: './resources/app/index.ts',
    },

    output: {
      filename: 'js/[name].bundle.js',
      chunkFilename: 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'public'),
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['ng-annotate-loader', 'ts-loader'],
        },

        {
          test: /\.scss$/,
          use: [
            {
              loader:
                argv.mode === 'development'
                  ? 'style-loader'
                  : MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                //https://github.com/zeit/next.js/issues/1325
                includePaths: ['resources/sass'].map((d) =>
                  path.join(__dirname, d)
                ),
              },
            },
          ],
        },

        {
          test: /\.(jpe?g|png|gif|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },

        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
      }),

      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: '[id].css',
      }),
    ],

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 8008,
    },
  };
};
