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
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
        test: /\.(jpeg|JPG)$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        loader: 'source-map-loader',
        test: /\.js$/,
      },
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
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
      template: './dist/index.html',
    }),
  ],
  resolve: {
    extensions: ['.css', '.js', '.ts', '.tsx'],
  },
};
