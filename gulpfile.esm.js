// Gulp tasks
import { series, parallel } from "gulp";
import { css, cssPurgeMin, cssWatcher } from "./gulp_tasks/css.esm";
import { img, imgWatcher } from "./gulp_tasks/img.esm";
import { eleventyBuild, eleventyWatch } from "./gulp_tasks/eleventy.esm";

// Public Tasks
const production = series(eleventyBuild, parallel(css, img), cssPurgeMin);

const develop = series(
	parallel(
		series(
			parallel(css, img),
			parallel(cssWatcher, imgWatcher, eleventyWatch)
		)
	)
);

export { production, develop };
