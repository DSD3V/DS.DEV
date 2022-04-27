const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.css', '.js', '.ts', '.tsx'],
  },
};
