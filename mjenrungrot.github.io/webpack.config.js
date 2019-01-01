/* eslint-disable no-unused-vars */
const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = defaults => ({
  ...defaults,
  mode: "development",
  entry: "./src/entry.js",
  output: {
    path: __dirname + "/build",
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      // JS/JSX files
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/react",
              {
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            ]
          }
        }
      },
      // CSS files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      //  Font file
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      // PDF + images
      {
        test: /\.(pdf|gif|png|jpe?g|svg)$/,
        use: "file-loader?name=[path][name].[ext]"
      },
      // HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
});
