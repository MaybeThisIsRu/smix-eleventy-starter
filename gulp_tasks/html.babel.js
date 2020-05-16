import { src, dest, watch, series } from "gulp";
import htmlmin from "gulp-htmlmin";
import { paths } from "../paths";

const html = () => {
	return src(paths.html.src)
		.pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
		.pipe(dest(paths.html.dest));
};

const htmlWatcher = () => {
	return watch(paths.html.src, series(html));
};

export { html, htmlWatcher };
