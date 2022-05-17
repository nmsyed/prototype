const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require( 'path' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports =  {
   context: __dirname,
   entry: './src/index.js',
   mode: 'production',
   output: {
      path: path.resolve( __dirname, 'prod' ),
      filename: "[name].[contenthash].js",
      publicPath: '/',
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader"
         },
         {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                'css-loader',
            ],
         },
         {
            test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          },
         {
            test: /\.(png|j?g|svg|gif|ico)?$/,
            use: 'file-loader'
         }
      ]
   },
   optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({ sourceMap: true, terserOptions: {
                                          compress: {
                                             drop_console: true,
                                             },
                                          },
                                    }),  new CssMinimizerPlugin()],
      splitChunks: { chunks: "all" }
   },
   plugins: [
      new Dotenv({
         path: './.env.production'
      }),
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css',
         ignoreOrder: false,
      }),
      new WorkboxPlugin.GenerateSW({
         // these options encourage the ServiceWorkers to get in there fast
         // and not allow any straggling "old" SWs to hang around
         clientsClaim: true,
         skipWaiting: true,
         cleanupOutdatedCaches:true,
         sourcemap: false
       }),
      new CopyPlugin({
         patterns: [
           { from: path.resolve( __dirname, 'public/images' ), to: 'images' },
           { from: path.resolve( __dirname, 'public/favicon.ico' ), to: 'favicon.ico' },
           { from: path.resolve( __dirname, 'public/manifest.json' ), to: 'manifest.json' },
           { from: path.resolve( __dirname, 'public/robots.txt' ), to: 'robots.txt' },
         ],
       }),
   ]
};
