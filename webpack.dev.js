const { resolve } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const { publicDecrypt } = require('crypto');
const outputFile = '[name]';
const assetFile = '[name]';

// ↓↓追加↓↓
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');
const entries = WebpackWatchedGlobEntries.getEntries([path.resolve(__dirname, './src/html/*.html')], {})();

const htmlGlobPlugins = (entries, srcPath) => {
    return Object.keys(entries).map((key) =>
        new HtmlWebpackPlugin({
            inject: 'body',
            // ↓↓【filenameプロパティ】をファイル名と違う値にすることで
            // ↓↓ ブラウザで開くファイルを選ぶことができる(原因不明)
            filename: `00_${key}.html`,
            template: `${srcPath}/${key}.html`,
            chunks: ['app'], //jsファイルは固定
        })
    );
};
// ↑↑追加↑↑



module.exports = () => merge(commonConf({ outputFile, assetFile }), {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        // host: '0.0.0.0',
        // port: 3000,
        liveReload: true,
        open: true,
        hot: false,
        static: {
            directory: path.join(__dirname, "public"),
            watch: {
                ignored: /node_modules/,
            },
        },
    },
    plugins: [
        ...htmlGlobPlugins(entries, './src/html') //  追加
    ],
});