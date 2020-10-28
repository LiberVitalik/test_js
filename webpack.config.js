const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        open: true,
        port: 3000
    }
}