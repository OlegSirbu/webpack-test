
var webStrip = require('strip-loader');
var devConfig = require('./webpack.config');

var stripLoader = {
    test:[/\.js$/, /\.es6$/],
    exclude: "/node_modules/",
    loader: webStrip.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;