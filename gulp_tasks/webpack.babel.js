import webpack from "webpack";
import webpackConfig from "../webpack.config";

function webpacker() {
	return new Promise((resolve, reject) => {
		webpack(webpackConfig, (err, stats) => {
			if (err) {
				return reject(err);
			}
			if (stats.hasErrors()) {
				return reject(new Error(stats.compilation.errors.join("\n")));
			}
			resolve();
		});
	});
}

export { webpacker };
