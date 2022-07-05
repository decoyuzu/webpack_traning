const { resolve } = require('path');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
    mode: 'development',
    entry: { app: './src/app.js' },
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][chunkhash].js',
        // asset/resourceのファイル名の設定
        assetModuleFilename: './images/[name][ext]',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: [
                'babel-loader',
            ]
        },
        {
            test: /\.scss$/,
            use: [
                // 'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.html$/,
            loader: HtmlWebpackPlugin.loader,
        },
        {
            test: /\.(jpe?g|gif|png|svg|mp4|woff2?|ttf|eot)$/,
            type: 'asset/resource',
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'app.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new ESLintPlugin({
            extensions: ['.js'],
            exclude: 'node_modules',
            fix: true
        })
    ],
};