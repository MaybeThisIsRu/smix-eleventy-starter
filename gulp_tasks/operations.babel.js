import { src, dest } from "gulp";
import del from "del";

import { paths } from "../config";

function clean() {
	const filesToDelete = [`${paths.projectDestDir}/**/*`];

	return del(filesToDelete);
}

function htmlToDist() {
	return src(paths.html.src).pipe(dest(paths.html.dest));
}

export { clean, htmlToDist };
