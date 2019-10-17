import { series, watch } from "gulp";
import connect from "connect";
import serveStatic from "serve-static";
import livereloadInject from "connect-livereload";
import livereloadDo from "gulp-livereload";

import { paths } from "../config.js";

const options = {
	filesToWatch: [
		paths.js.dest + "/**",
		paths.img.dest + "/**",
		paths.css.dest + "/**",
		"./_config*.yml",
		"./**/*.markdown",
		"./**/*.md",
		"./**/*.html",
		"!./node_modules/**",
		"!./assets/src/**",
		"!./_site/**",
		"!./.jekyll-cache/**",
		"!./vendor/**",
		"!./.bundle/**"
	]
};

const server = connect();

function serverInit(done) {
	// Start the connect server
	server
		.use(livereloadInject({ port: 35729 }))
		.use(serveStatic("./_site"))
		.listen(8080);

	// Start the livereload server
	livereloadDo.listen();

	done();
}

function serverReload(done) {
	livereloadDo();
	done();
}

function serverWatch() {
	return watch(options.filesToWatch, series(build, serverReload)).on(
		"change",
		event => {
			console.log(event);
		}
	);
}

export { serverInit, serverWatch };
