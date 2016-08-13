var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
var rimraf = require('rimraf')
var LiveReloadPlugin = require('webpack-livereload-plugin')
var autoprefixer = require('autoprefixer')
var beautify = require('code-beautify')

var isProduction = process.argv.slice(2)[0] === '-p'

rimraf.sync(__dirname + '/build')

var config = {
  entry: {
    app: __dirname + '/src'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name]' + (isProduction ? '.[hash]' : '') + '.js',
    chunkFilename: '[id]' + (isProduction ? '.[hash]' : '') + '.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ["es2015", "stage-0", "react"],
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)(\?v=[\d\.]+)?$/,
      loader: 'file-loader?name=files/[hash].[ext]'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss'
    }, {
      test: /\.less$/,
      loader: 'style!css!less!postcss'
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }, {
      test: /\.doc$/,
      loader: 'babel!doc'
    }]
  },
  resolveLoader: {
    alias: {
      'doc': path.join(__dirname, './loaders/doc')
    }
  },
  markdownLoader: {
    highlight: (code, lang) => beautify(code, lang)
  },
  postcss: [autoprefixer({
    browsers: ['last 3 versions']
  })],
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'bfd': path.resolve(__dirname, '../src'),
      'public': path.resolve(__dirname, './src/public')
    }
  },
  plugins: []
}

if (isProduction) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }))
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    }
  }))
  config.plugins.push(function() {
    this.plugin('done', function(statsData) {
      var stats = statsData.toJson()
      console.log(stats.errors)
      var templateFile = 'index.html'
      var template = fs.readFileSync(path.join(__dirname, templateFile), 'utf8')
      template = template.replace(/app.*?.js/, 'app.' + stats.hash + '.js')
      fs.writeFileSync(path.join(__dirname, templateFile), template)
    })
  })
} else {
  config.plugins.push(new LiveReloadPlugin({
    appendScriptTag: true
  }))
}

module.exports = config