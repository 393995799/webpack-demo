var webpack = require('webpack');
var path = require('path');
var assetsPath = path.resolve(__dirname, '../build');

module.exports = {
    context: path.resolve(__dirname, '..'),
    entry: 'app.js',
    output: {
        path: assetsPath,
        pathinfo: true,
        filename: 'app.js'
    },
    progress: true,
    resolve: {
        root: [
            path.resolve('js/app'),
            path.resolve('js/lib')
        ],
        modulesDirectories: [
            'node_modules'
        ],
        extensions: ['', '.json', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: "style?insertAt=top!css!sass"
                // loaders: ["style-loader", "css-loader", "sass-loader"]	// 两种写法产生一样的结果
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            sourceMap: false,
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        })
    ]
};