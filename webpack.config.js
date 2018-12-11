"use strict";
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
  mode: devMode,
  entry: ["./dev/app.js"],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
        options: {
          sourcemap: devMode ? true : false,
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader",
            sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax",
            css: "vue-style-loader!css-loader"
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: devMode ? true : false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: devMode ? true : false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist/*"]),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    publicPath: "/",
    compress: true,
    https: true,
    port: 4444,
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "[name].js"
  }
};
