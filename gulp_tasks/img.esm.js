import { src, dest, watch, lastRun, series } from "gulp";
import imagemin from "gulp-imagemin";

import { paths } from "../paths";

function img() {
	return src(paths.img.src, { since: lastRun(img) })
		.pipe(imagemin())
		.pipe(dest(paths.img.dest));
}

function imgWatcher() {
	return watch(paths.img.src, series(img));
}

export { img, imgWatcher };
