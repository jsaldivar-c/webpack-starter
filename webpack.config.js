const HtmlWebPackPlugin       = require('html-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin              = require('copy-webpack-plugin');

module.exports = {
    mode : 'development',
    optimization : {
        minimizer: [ new OptimizeCssAssetsPlugin() ]
    },
    module : {
        rules : [
                    {
                        test: /\.css$/,
                        exclude: /styles\.css$/,
                        use: [
                        //MiniCssExtractPlugin.loader,
                        'style-loader',
                        'css-loader'
                        ]
                    },
                    {
                        test: /styles\.css$/,
                        use: [
                        //'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                        ]
                    },
                    {
                        test   : /\.html$/i,
                        loader :'html-loader',
                        options: {
                                    attributes: false,
                                    minimize: false // Minifica el archivo HTML
                                 },
                    }
                ]
            },
            plugins: [
                new HtmlWebPackPlugin({
                    template: './src/index.html',
                    filename: './index.html'
                }),
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    ignoreOrder: false
                }),
                // new CopyPlugin([
                //     {from:'src/assets', to: 'assets/'}
                // ])
                new CopyPlugin({
                    patterns:[
                        {
                            from:'src/assets', to: 'assets/'
                        },
                    ],
                })
            ]
}