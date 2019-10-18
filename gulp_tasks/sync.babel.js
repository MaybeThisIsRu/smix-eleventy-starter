import { series, watch } from "gulp";
import browserSync from "browser-sync";
import historyApiFallback from "connect-history-api-fallback";

import { paths } from "../config.js";

const server = browserSync.create();

function serverInit(done) {
	server.init(
		{
			server: {
				baseDir: "dist",
				middleware: [historyApiFallback()]
			},
			browsers: "firefox"
		},
		() => {
			// BrowserSync is ready for use.
			done();
		}
	);
}

function serverReload(done) {
	server.notify("Reloading");
	server.reload();
	done();
}

function serverWatch() {
	return watch(
		[
			`${paths.js.outputDir}/${paths.js.output}`,
			`${paths.img.dest}/**`,
			`${paths.css.dest}/**`,
			"./**/*.markdown",
			"./**/*.md",
			"./**/*.html",
			"!./node_modules/**",
			"!./assets/**"
		],
		series(serverReload)
	);
}

export { serverInit, serverWatch };
