const path = require('path');

module.exports = {
	outputDir: path.resolve(__dirname, '../server/public'), // puts public folder in server not client! on build
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:5000'
			}
		}
	}
};
