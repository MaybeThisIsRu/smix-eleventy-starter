import { series, watch } from "gulp";
import browserSync from "browser-sync";
// import historyApiFallback from "connect-history-api-fallback";

import { eleventy } from "./ssg.babel";

const server = browserSync.create();

function serverInit(done) {
	server.init(
		{
			server: {
				baseDir: "dist",
				// middleware: [historyApiFallback()]
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
			"./_data/**",
			"./.eleventy.js",
			"./.eleventyignore",
			"./**/*.markdown",
			"./**/*.md",
			"./**/*.html",
			"./**/*.liquid",
			"./**/*.njk",
			"!./node_modules/**",
			"!./assets/**",
			"!./dist/**",
		],
		series(eleventy, serverReload)
	);
}

export { serverInit, serverReload, serverWatch };
