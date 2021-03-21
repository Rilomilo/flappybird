const path=require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports={
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname,"out"),
        filename: "bundle.js"
    },
    mode:"development",
    devtool: false,
    resolve: {
        extensions: [".js",".ts"],
        alias: {
            "@":"src/"
        }
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                loader: "ts-loader"
            },
            {
                test:/\.html$/,
                loader: "html-loader"
            },
            {
                test:/\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|svg|png|gif|ico)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new CopyWebpackPlugin({
            patterns:[{
                from:'./res',
                to:'./res'
            }]
        })
    ]
}