/**
 * Created by WangDejun on 1/20/18.
 */

module.exports = {
    entry: {
        router: ['./app/router.jsx']
    },
    output: { path: __dirname, filename: 'public/[name].bundle.js'},

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};

