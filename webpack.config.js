const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: './frontend/app.js',
    app1: './frontend/app1.js'
  
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/[name].js'
  },
  module : {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      filename: 'index1.html',
      template: './frontend/index.html',
      chunks:['app'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    } ),
       new HtmlWebpackPlugin( {
      filename: 'index2.html',
      template: './frontend/home.html',
      chunks:'[app1]',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
       
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    })
  ],
  devtool: 'source-map'
};
