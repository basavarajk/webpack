module.exports = {
	output: {
		chunkFilename: "js/chunks/c.js"
	},
	node: {
		__dirname: false,
		__filename: false
	},
	optimization: {
		minimizer: {
			options: {
				sourceMap: true
			}
		}
	},
	devtool: "source-map"
};
