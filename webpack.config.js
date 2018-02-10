const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: path.join(__dirname, '/src/scripts/index.js'),
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
    // configure the output of the total CSS file
    new ExtractPlugin('bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          use: [
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [`${__dirname}/src/styles`],
              },
            },
          ],
        }),
      },
    ],
  },
};

module.exports = config;
