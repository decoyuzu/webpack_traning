const { resolve } = require('path');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { Template } = require('webpack');

module.exports = ({ outputFile, assetFile }) => ({
    entry: { app: './src/app.js', sub: './src/sub.js' },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: `${outputFile}.js`,
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
                generator: {
                    filename: `./images/${assetFile}[ext]`,
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: `${outputFile}.html`, //
            inject: 'body', //
        }),
        new MiniCssExtractPlugin(),
        new ESLintPlugin({
            extensions: ['.js'],
            exclude: 'node_modules',
            fix: true
        })
    ],
    target: ['web', 'es5']
});