const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    // print: './src/js/print.js',
  },
  output: {
    // filename: '[name].bundle.js', // [name] for different js files
    filename: 'bundle.js', // [name] for different js files
    path: path.resolve(__dirname, 'dist'),
    clean: true, // deleting unused resources in dist folder
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   static: './dist',
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      minify: false,
    }),
    // new ESLintWebpackPlugin({ // Add the plugin here
    //   extensions: ['js', 'jsx'], // Specify the file extensions to lint
    //   exclude: ['node_modules'], // Exclude certain directories
    //   fix: true, // Automatically fix linting errors where possible
    // }),
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

