"use strict";
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const config = {
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
        include: __dirname,
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
  optimization: {
    minimize: true
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "[name].js"
  }
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + "/src/index.js"),
    output: {
      filename: "vue-select.min.js",
      libraryTarget: "window",
      library: "vueSelect"
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + "/src/vueSelect.vue"),
    output: {
      filename: "vue-select.js",
      libraryTarget: "umd",
      library: "vue-select",
      umdNamedDefine: true
    }
  })
];
