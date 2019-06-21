module.exports = {
    entry: './Webpack/main.js',
    output: {
        path: __dirname,
        filename: './Webpack/bundle.js',
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