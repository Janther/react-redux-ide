var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CssPlugin = new ExtractTextPlugin('app.css');
var LessPlugin = new ExtractTextPlugin('syntax.css');

module.exports = {
  entry: [
    './js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BABEL_ENV': JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin(),
    CssPlugin,
    LessPlugin
  ],
  module: {
    loaders: [
      { test: /\.cson$/, loader: "cson" },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: CssPlugin.extract('css-loader?module!postcss-loader') },
      { test: /\.less$/, loader: LessPlugin.extract('css-loader?module!postcss-loader!less-loader') }
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      oniguruma: 'onigurumajs'
    }
  },
  postcss: function (webpack) {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")()
    ]
  }
};
