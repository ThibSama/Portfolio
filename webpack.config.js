const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    carrousel: "./public/js/carrousel.js",
    date: "./public/js/date.js",
    etudes: "./public/js/etudes.js",
    veille: "./public/js/veille.js",
    font: "./public/js/font.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "js/[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "../fonts",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
