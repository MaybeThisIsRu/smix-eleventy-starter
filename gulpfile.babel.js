// Gulp tasks
import { series, parallel } from "gulp";
import { clean, htmlToDist as html } from "./gulp_tasks/operations.babel";
import { css, cssPurgeMin, cssWatcher } from "./gulp_tasks/css.babel";
import { js } from "./gulp_tasks/js.babel";
import { img, imgWatcher } from "./gulp_tasks/img.babel";
import { serverInit, serverWatch } from "./gulp_tasks/sync.babel";

// Public Tasks
const build = series(parallel(html, css, js, img), cssPurgeMin);

const develop = series(
	clean,
	parallel(html, css, js, img),
	serverInit,
	parallel(cssWatcher, imgWatcher, serverWatch)
);

export { build, develop };
