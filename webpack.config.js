module.exports = {
    entry: ['./utils.js', "./index.js"],
    output: {
        filename: 'bundle.js'
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
                test: /\.es6$/,
                exlude: /node_modules/,
                loader: "babel-loader"
            },
            {test: /\.css$/, loader: "style!css"}
        ]
    },

    resolve: {
        extensions: ['', '.es6', '.js']
    }
};