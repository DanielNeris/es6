module.exports = {
    entry: './Webpack/src/main.js',
    output: {
        path: __dirname + '/Webpack/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/Webpack/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};