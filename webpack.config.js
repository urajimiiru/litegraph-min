const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',

    entry: './launch.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'pack.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};