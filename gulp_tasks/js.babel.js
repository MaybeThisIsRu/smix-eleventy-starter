// TODO Separate bundles for external scripts and project scripts

import { dest } from "gulp";
import gulpif from "gulp-if";
import uglify from "gulp-uglify";
import log from "fancy-log";

import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import browserify from "browserify";
import watchify from "watchify";
import _merge from "lodash.merge";

import { paths } from "../paths";
const env = require("../eleventy/env");

const browserifyDefaultConfig = {
	entries: paths.js.entry,
	extensions: [".js", ".json", ".jsx"]
};

const browserifyDevConfig = {
	debug: true,
	cache: {},
	packageCache: {}
};

const browserifyProdConfig = {};

const browserifyConfig = _merge(
	{},
	browserifyDefaultConfig,
	env.isNodeDevelopment ? browserifyDevConfig : browserifyProdConfig
);

function js(done) {
	// Initiate browserify (pure module bundler)
	var b = browserify(browserifyConfig);

	// Once we configure browserify based on environment, this is what we run.
	function bundle() {
		return b
			.bundle()
			.on("error", e => {
				// Prevents watchify from swallowing browserify errors
				done(new Error(e));
			})
			.pipe(source(paths.js.output)) // output filename
			.pipe(buffer())
			.pipe(gulpif(env.isNodeProduction, uglify()))
			.pipe(dest(paths.js.outputDir));
	}

	// Transpile ES6 -> ES5
	b.transform("babelify");

	if (env.isNodeDevelopment) {
		// Plug in watchify -- needs cache and packageCache options, see above.
		b.plugin(watchify);

		// When built, log event is fired.
		b.on("log", function(msg) {
			log(msg);
			done();
		});

		// When a file changes, update event is fired.
		b.on("update", bundle);
	}

	// Run bundle at least once
	return bundle();
}

export { js };
