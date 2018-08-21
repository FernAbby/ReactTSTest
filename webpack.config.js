const path = require('path');
const moment = require('moment');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env_config = require('./node_tool/env.js');
const env_mode = process.argv[3];

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: './static/js/main.[hash].js'
    },
    mode: env_mode,
    devtool: 'cheap-module-source-map',
    devServer: {
        host: env_config['HOST'] || 'localhost' || '0.0.0.0',
        port: env_config['PORT'] || 3000,
        https: env_config['HTTPS']=='true',
        compress: true, // 服务器返回浏览器的时候是否启动gzip压缩
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
        open: true,//自动打开浏览器
        proxy: env_config['PROXY'] || {
            "/api": "http://localhost:"+ (env_config['PORT'] || 3000)
        },
    },
    module: {
        rules: [{
            test: /\.(js|jsx|mjs)$/,
            use: [
                'babel-loader',
                {
                    loader: 'eslint-loader',
                },
            ],
            exclude: /node_modules/,
            include: /src/
        },{
            test: /\.(ts|tsx)$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },{
                loader: 'eslint-loader',
            }],
            exclude: /node_modules/,
            include: /src/,
        },{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ],
            exclude: /node_modules/,
            include: [path.resolve(__dirname, 'src')],
        },{
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "autoprefixer-loader",
                "less-loader"
            ],
            exclude: /node_modules/,
            include: /src/
        },{
            test:/\.(sass|scss)$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "autoprefixer-loader",
                "sass-loader"
            ],
            exclude: /node_modules/,
            include: /src/
        },{
            test: /\.(png|bmp|jpe?g|gif)$/,
            use: [{
                loader: 'url-loader',
                options: { // options参数可以定义多大的图片转换为base64
                    limit: 10000, // 表示小于50kb的图片转为base64,大于50kb的是路径
                    outputPath: './static/images' //定义输出的图片文件夹
                }
            }],
            exclude: /node_modules/,
            include: /src/
        },{
            test: /\.json$/,
            loader: 'json-loader'
        },{
            test: /\.txt$/,
            use: 'raw-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.BannerPlugin('Create By Wenzhen At ' + moment().format('YYYY-MM-DD HH:mm:ss')),
        new HtmlWebpackPlugin({
            template: './public/index.html',  // 文件地址
            filename: './index.html',  // 生成文件名字
            title: "aims",
            favicon: '',
            // hash: true,//防止缓存
            inject: true,    // 不把生成的css，js插入到html中
            // chunks: ['app'],  //指定某一个入口，只会把入口相关载入html
            minify: {  // 压缩html
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "./static/css/main.css",
        })
    ],
    // watch: true, // 开启监听文件更改，自动刷新
    // watchOptions: {
    //     ignored: /node_modules/, //忽略不用监听变更的目录
    //     aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
    //     poll:1000 //每秒询问的文件变更的次数
    // },
    resolve: {//引入文件默认格式后缀
        extensions: ['.ts','.tsx','.js','.jsx','.json','.web.js','.mjs','.web.jsx'],
    },
    externals: {//全局变量,不推荐
        BMap: 'window.BMap',
    }
}