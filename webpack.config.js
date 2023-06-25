const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let devMode = true;

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  devMode = false;
}

module.exports = {
  mode,
  entry: {
    index: './src/index.tsx',
    // another:'./src/FirstComponent/FirstComponent.tsx',
    // another2: './src/SecondComponent/SecondComponent.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', 'css', 'scss'],
    alias: {
      ['@']: path.resolve(__dirname, 'src/'),
    },
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
