const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'builder.js',
        path: __dirname + '/public'
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