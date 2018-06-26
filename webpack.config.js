const path = require('path');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  entry: ['./src/js/main.js', './src/scss/main.scss'],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [{
          family: "Montserrat"
        }
      ]
    })
  ]
};
