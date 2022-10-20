const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].min.js',
		clean: false
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin()
		]
	},
})
