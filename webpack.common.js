const { resolve } = require('path');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { Template } = require('webpack');
const { ProvidePlugin } = require('webpack');

module.exports = ({ outputFile, assetFile }) => ({
    entry: { app: './src/js/app.js' },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: `${outputFile}.js`,
        // asset/resourceのファイル名の設定
        assetModuleFilename: './src/images/[name][ext]',
        chunkFilename: `${outputFile}.js`
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
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
                    filename: `./src/images/${assetFile}[ext]`,
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },

        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, './src/html/index.html'),
        //     filename: `${outputFile}.html`, //
        //     inject: 'body', //
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        // new ESLintPlugin({
        //     extensions: ['.js'],
        //     exclude: 'node_modules',
        //     fix: true
        // }),
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            utils: [path.resolve(__dirname, 'src/js/utils'), 'default'],
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                defaultVendors: {
                    name: "vendors",
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                utils: {
                    name: "utils",
                    test: /src[\\/]js[\\/]utils/,
                    // chunks: 'async',
                },
                default: false
            },
        },
    },
    resolve: {
        alias: {
            '@scss': path.resolve(__dirname, 'src/scss'),
            '@imgs': path.resolve(__dirname, 'src/images'),
        },
        extensions: ['.js', '.scss'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],

    },
    target: "web"
});