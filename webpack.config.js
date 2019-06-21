module.exports = {
    entry: [
        '@babel/polyfill',
        './Aplicacao/src/main.js'
    ],
    output: {
        path: __dirname + '/Aplicacao/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/Aplicacao/public',
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