module.exports = {
  context: __dirname,
  entry: './index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [ 
      { test: /\.jsx$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] } }
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300
  },
  devtool: 'cheap-inline-module-source-map',
  resolve: {
    modulesDirectories: [ './node_modules' ],
    extensions: ['', '.js']
  },
  resolveLoader: {
    modulesDirectories: [ './node_modules' ],
    moduleTemplates: [ '*-loader', '*' ],
    extensions: ['', '.js']
  }
}
