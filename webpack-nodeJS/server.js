var express = require('express');
var path = require('path');
var logger = require('morgan');
var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use('/', routes);

if(app.get('env') === 'development'){

    var webpackMiddleware = require('webpack-dev-middleware');
    var webpack = require('webpack');

    var config = require('./webpack.config');

    app.use(webpackMiddleware(webpack(config), {
        publicPath: '/build',
        headers: {"X-Custom-Webpack-Header":"yes"},
        stats:{
            colors: true
        }
    }));
}

app.use(function (req, res, next) {
   var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(8000, function () {
    console.log('listen port 8000');
});