// const webpack = require('webpack');

// module.exports = {
//   entry: [
//     'webpack-dev-server/client?http://localhost:3000',
//     'webpack/hot/only-dev-server',
//     './src/client/app.js',
//     './index.html',
//     './assets/css/style.css'
//   ],
//   module: {
//     loaders: [
//       {
//         // pack js modules together
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'react-hot!babel',
//         query: {
//           presets: ['react', 'es2015'],
//         },
//       },
//       {
//         // include html files
//         test: /\.html$/,
//         loader: 'file?name=[name].[ext]',
//       },
//       {
//         test: /\.css$/,
//         loader: 'file?name=assets/css/[name].[ext]',
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   output: {
//     path: `${__dirname}/dev/client`,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: './dev/client',
//     hot: true
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ]
// };

const config = {
  context: `${__dirname}/src/client`,
  entry: {
    javascript: './app.js', // take in javascript entry point
    html: './index.html', // take in the client's index.html
    css: './assets/css/style.css'   
  },

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dev/client`,
  },

  module: {
    loaders: [
      {
        // pack js modules together
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        // include html files
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        loader: 'file?name=assets/css/[name].[ext]',
      },
    ],
  },
};
module.exports = config;
