var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./index.js"],
    output: {
        path: path.resolve('build/js'),
        publicPath: '/public/assets/js/',
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: 'public'
    },
    module: {
        preLoaders:[
            {
                test: /\.js$/,
                exlude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                exlude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.less$/,
                exlude: /node_modules/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.es6$/,
                exlude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exlude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    resolve: {
        extensions: ['', '.es6', '.js']
    }
};