const path = require('path');
const webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: DEVELOPMENT ? 'source-map' : false,

  // Entry point for the application
  entry: {
    index: './src/main.jsx', // Update entry to your main React component file
  },

  externals: {
    '@clayui/badge': '@clayui/badge', // Add @clayui dependencies if needed
    react: 'react',
    'react-dom': 'react-dom',
  },

  experiments: {
    outputModule: true,
  },

  mode: DEVELOPMENT ? 'development' : 'production',

  optimization: {
    minimize: !DEVELOPMENT,
  },

  // Output configuration
  output: {
    clean: true,
environment: {
			dynamicImport: true,
			module: true,
		},
    filename: '[name].[contenthash].js',
    library: {
      type: 'module',
    },
   path: path.resolve('build', 'static'), // Ensure this path is correct
  },

  // Module rules for handling different types of files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Image files
        type: 'asset/resource', // Outputs images to the build folder
      },
    ],
  },

  // Resolve JSX and JS file extensions
  resolve: {
    extensions: ['.js', '.jsx'],
  },

plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),
	],
};
