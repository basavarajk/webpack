module.exports = {
	node: {
		__dirname: false,
		__filename: false
	},
	entry: {
		ie8: ["./ie8.js"],
		bundle0: ["./index.js"],
		vendors: ["./vendors.js"],
		extract: ["./extract.js"],
		compress: ["./compress.js"]
	},
	output: {
		filename: "[name].js"
	},
	optimization: {
		minimize: true,
		minimizer: [
			{
				name: "uglifyjs-webpack-plugin",
				options: {
					exclude: [
						"vendors.js",
						"extract.js"
					]
				}
			},
			{
				name: "uglifyjs-webpack-plugin",
				options: {
					extractComments: true,
					include: [
						"extract.js"
					]
				}
			},
			{
				name: "uglifyjs-webpack-plugin",
				options: {
					uglifyOptions: {
						compress: {
							passes: 2
						}
					},
					include: [
						"compress.js"
					]
				}
			},
		]
	}
};
