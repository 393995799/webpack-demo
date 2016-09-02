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
				test: /\.scss$/,
				loader: "style?insertAt=top!css!sass"
				// loaders: ["style-loader", "css-loader", "sass-loader"]	// 两种写法产生一样的结果
			}
		]
	}
};