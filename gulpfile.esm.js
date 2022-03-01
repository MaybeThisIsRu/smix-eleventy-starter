// Gulp tasks
import { series, parallel } from "gulp";
import { css, cssPurgeMin, cssWatcher } from "./gulp_tasks/css.esm";
import { eleventyBuild, eleventyWatch } from "./gulp_tasks/eleventy.esm";

// Public Tasks
const production = series(eleventyBuild, parallel(css), cssPurgeMin);

const develop = series(
	parallel(series(css, parallel(cssWatcher, eleventyWatch)))
);

export { production, develop };
