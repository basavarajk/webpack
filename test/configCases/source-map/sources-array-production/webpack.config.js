module.exports = {
	node: {
		__dirname: false,
		__filename: false
	},
	devtool: "source-map",
	optimization: {
		minimize: true,
		minimizer: {
			options: {
				sourceMap: true
			}
		}
	}
};
