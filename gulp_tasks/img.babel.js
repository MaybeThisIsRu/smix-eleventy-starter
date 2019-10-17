import { src, dest, watch, lastRun } from "gulp";
import imagemin from "gulp-imagemin";

import { paths } from "../config.js";

function img() {
	return src(paths.img.src, { since: lastRun(img) })
		.pipe(imagemin())
		.pipe(dest(paths.img.dest));
}

function imgWatcher() {
	return watch(paths.img.src, img);
}

export { img, imgWatcher };
