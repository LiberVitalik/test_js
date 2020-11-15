const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

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
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test:/\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
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
        new HtmlWebpackPlugin({
            template: './src/components/view/view.html'
        }),
        new miniCss({
            filename: 'style.css',
        })
    ],
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        open: true,
        port: 3000
    }
}