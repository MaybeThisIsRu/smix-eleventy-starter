import { src, dest, watch, lastRun, series } from "gulp";
import imagemin from "gulp-imagemin";

import { paths } from "../config.js";
import { serverReload } from "./sync.babel";

function img() {
	return src(paths.img.src, { since: lastRun(img) })
		.pipe(imagemin())
		.pipe(dest(paths.img.dest));
}

function imgWatcher() {
	return watch(paths.img.src, series(img, serverReload));
}

export { img, imgWatcher };
