/**
 * Created by WangDejun on 1/20/18.
 */
const webpack = require('webpack');

module.exports = {
    entry: {
        router: ['./app/router.jsx']
    },
    output: { path: __dirname, filename: 'public/[name].bundle.js'},

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{loader: 'babel-loader'}, 'source-map-loader']
        }]
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map'
    })],

    resolve: {
        extensions: ['.js', 'json', '.coffee', '.jsx', '.css', '.scss']
        // modulesDirectories: ['node_modules'],
        // alias: {
        //     Shop: 'app/ShopList.js',
        //     Moment: 'moment/MomentList.js'
        // }
    }
};

