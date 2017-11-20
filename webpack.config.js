const path = require('path');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: ""
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};