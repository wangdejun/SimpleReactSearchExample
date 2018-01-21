/**
 * Created by WangDejun on 1/20/18.
 */

const webpack = require('webpack');

module.exports = {
    entry: {
        root: ['./app/root.jsx']
    },
    output: { path: __dirname, filename: 'public/[name].bundle.js'},

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{loader: 'babel-loader'}, 'source-map-loader']
            },

            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // 将 JS 字符串生成为 style 节点
                }, {
                    loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: 'sass-loader' // 将 Sass 编译成 CSS
                }]
            }
        ]
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map'
    })],

    resolve: {
        extensions: ['.js', 'json', '.coffee', '.jsx', '.css', '.scss']
    }
};

