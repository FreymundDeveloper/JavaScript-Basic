const devMod = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const minimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: devMod ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'builder.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new minimizerPlugin({})
        ],
    },
    /*plugins: [    // external model
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],*/
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                //MiniCssExtractPlugin.loader,
                'style-loader',
                'css-loader'
            ]
        }]
    }
}