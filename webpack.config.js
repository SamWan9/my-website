const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, "assets")
    },
    module: {
       rules: [
           {
               test: /\.vue$/,
               loader: "vue-loader"
           },
           {
               test: /\.css$/,
               loader: ["style-loader", "css-loader"]
           },
           {
               test: /\.less$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   },
                   {
                       loader: "less-loader"
                   }
               ]
           }
       ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json']
    }
};