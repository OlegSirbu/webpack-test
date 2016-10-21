module.exports = {
     entry: ['./utils.js',"./index.js"],
    output:{
            filename: 'bundle.js'
        },
        
        module:{
            loaders:[
                {
                    test: /\.es6$/,
                    exlude: /node_modules/,
                    loader : "babel-loader"
                },
                { test: /\.css$/, loader: "style!css" }
            ]
        },

        resolve:{
            extensions:['','.es6','.js,']
        }
};