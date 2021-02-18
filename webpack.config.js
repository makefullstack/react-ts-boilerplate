const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",

  entry: {
    app: "./src/index",
  },
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dit"),
    publicPath: "/dist/", // 브라우저가 참조하는 위치
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()], // production 시에 삭제하기
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
  // CDN으로 배포하려면
};
