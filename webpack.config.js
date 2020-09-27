const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //mode: 'production',
  entry: {
    index: './lib/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsv', '.js', '.jsx', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'LUI',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
};
