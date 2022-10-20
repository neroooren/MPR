const path = require('path')

module.exports = {
	entry: {
		nerMPR: path.resolve(__dirname, '../src/index.js'),
	},
	output: {
		path: path.join(__dirname, '../lib'),
		library: {
			name: 'nerMPR',
			type: 'var',
		},
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
}
