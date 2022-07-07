const { resolve } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const assetFile = '[name]';


module.exports = () => merge(commonConf({ outputFile, assetFile }), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        liveReload: true,
        open: true,
        static: {
            directory: path.join(__dirname, "public"),
            staticOptions: {
                ignored: /node_modules/,
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: '[name].html', //
            inject: 'body', //
        }),
    ],
});