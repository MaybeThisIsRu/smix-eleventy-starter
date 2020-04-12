import { src, dest, watch, series } from "gulp";

import babel from "gulp-babel";
import uglify from "gulp-uglify";
import concat from "gulp-concat";

import { paths } from "../config";
import { serverReload } from "./sync.babel";

// We're not really JS-heavy on this project. For now, this is fine. Maybe we could add Webpack at a later date.

function js() {
	return src(`${paths.js.entryDir}/${paths.js.entry}`)
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat(paths.js.output))
		.pipe(dest(paths.js.outputDir));
}

function jsWatcher() {
	return watch(`${paths.js.entryDir}/**/*.js`, series(js, serverReload));
}

export { js, jsWatcher };
