// Gulp tasks
import { series, parallel } from "gulp";
import { clean } from "./gulp_tasks/operations.babel";
import { css, cssPurgeMin, cssWatcher } from "./gulp_tasks/css.babel";
import { js } from "./gulp_tasks/js.babel";
import { img, imgWatcher } from "./gulp_tasks/img.babel";
import { font, fontWatcher } from "./gulp_tasks/font.babel";
import { html } from "./gulp_tasks/html.babel";
import { serverInit, serverWatch } from "./gulp_tasks/sync.babel";
import { eleventy } from "./gulp_tasks/ssg.babel";

// Public Tasks
const production = series(eleventy, parallel(css, js, img, font), cssPurgeMin, html);

const develop = series(
	clean,
	eleventy,
	parallel(css, js, img, font),
	serverInit,
	parallel(cssWatcher, imgWatcher, fontWatcher, serverWatch)
);

export { production, develop };
