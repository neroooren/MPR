const { merge }  = require('webpack-merge');
const common = require('./webpack.common');

 module.exports = merge(common, {
	 mode: 'development',
	 output: {
		 filename: '[name].js',
		 clean: false
	 },
	 devtool: 'inline-source-map',
 })
