const { resolve } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name].[chunkhash]';
const assetFile = '[contenthash]';
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => merge(commonConf({ outputFile, assetFile }), {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/index.html'),
            filename: 'app.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCssPlugin(),

        ]
    }
});