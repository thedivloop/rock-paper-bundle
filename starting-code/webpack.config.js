const path = require("path");

module.exports = {
  mode: "development",
  entry: "./code/main.js",
  module: {
    rules: [
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.woff2?$/i,
        type: "asset/resource",
      },
    ],
  },
};
