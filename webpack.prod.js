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

// ↓↓追加↓↓
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');
const entries = WebpackWatchedGlobEntries.getEntries([path.resolve(__dirname, './src/html/*.html')], {
    //   ignore: path.resolve(__dirname, './src/js/**/_*.js'),
})();

// 追加
const htmlGlobPlugins = (entries, srcPath) => {
    return Object.keys(entries).map((key) =>
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: `${key}.html`,
            template: `${srcPath}/${key}.html`,
            chunks: ['app'], //jsファイルは固定
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    );
};
// ↑↑追加↑↑


module.exports = () => merge(commonConf({ outputFile, assetFile }), {
    mode: 'production',
    plugins: [
        // ↓↓追加↓↓
        ...htmlGlobPlugins(entries, './src/html') //  追加
        // ↑↑追加↑↑
        // new HtmlWebpackPlugin({
        //     inject: 'body',
        //     filename: 'app.html',
        //     template: path.join(__dirname, './src/html/index.html'),
        //     minify: {
        //         collapseWhitespace: true,
        //         keepClosingSlash: true,
        //         removeComments: true,
        //         removeRedundantAttributes: true,
        //         removeScriptTypeAttributes: true,
        //         removeStyleLinkTypeAttributes: true,
        //         useShortDoctype: true
        //     }
        // }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCssPlugin(),

        ]
    }
});