/* eslint-disable */
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    publicPath: "/"
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
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      },
      // HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              outputPath: "./"
            }
          }
        ]
      },
      // Markdown
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/404.html",
      filename: "./404.html"
    })
  ]
};
