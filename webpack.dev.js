const { resolve } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const { publicDecrypt } = require('crypto');
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
        hot: false,
        // historyApiFallback: {
        //     //↓live–serverで開きたいファイルを指定する↓
        //     index: '17_fadein_animation.html',
        //     //↑live–serverで開きたいファイルを指定する↑
        // },
        static: {
            directory: path.join(__dirname, "public"),
            watch: {
                ignored: /node_modules/,
            },
            // staticOptions: {
            //     ignored: /node_modules/,
            // },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/index.html'),
            filename: '00_app.html', //
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/01_css_sass.html'),
            filename: '01_css_sass.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/02_box_shadow.html'),
            filename: '02_box_shadow.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/03_test_btn.html'),
            filename: '03_test_btn.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/04_transform.html'),
            filename: '04_transform.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/05_position_z_index.html'),
            filename: '05_position_z_index.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/06_slide.html'),
            filename: '06_slide.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/07_3d_animation.html'),
            filename: '07_3d_animation.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/08_3d_animation_test.html'),
            filename: '08_3d_animation_test.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/09_layout_matome.html'),
            filename: '09_layout_matome.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/10_roader.html'),
            filename: '10_roader.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/11_animation_demo.html'),
            filename: '11_animation_demo.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/12_selector.html'),
            filename: '12_selector.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/13_roader_for.html'),
            filename: '13_roader_for.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/14_animation_test.html'),
            filename: '14_animation_test.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/15_menu_icon.html'),
            filename: '15_menu_icon.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/16_moji_animation.html'),
            filename: '16_moji_animation.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/17_fadein_animation.html'),
            filename: '17_fadein_animation.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/18_images.html'),
            filename: '18_images.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/19_slide_animation.html'),
            filename: '19_slide_animation.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/20_slide_animation.html'),
            filename: '20_slide_animation.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/30_javascript.html'),
            filename: '30_javascript.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/40_dom.html'),
            filename: '40_dom.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/41_dom_event.html'),
            filename: '41_dom_event.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/html/42_dom_content_loaded.html'),
            filename: '42_dom_content_loaded.html',
            inject: 'body', //
            chunks: ['app'], //←ここでscssファイルを指定してあげる
        }),
    ],
});