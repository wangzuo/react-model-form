module.exports = {
  entry: './example/app.js',
  output: {
    path: __dirname + '/example',
    filename: 'bundle.js',
    publicPath: "/example/",
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: "source-map"
};
