const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, 'static'),
            publicPath: '/static',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '3D App',
            template: './src/index.html',
        }),
    ],
};
