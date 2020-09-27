const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
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
    // rules: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: 'babel-loader',
    //     },
    //   },
    // ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
};
