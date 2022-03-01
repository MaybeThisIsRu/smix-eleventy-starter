// Gulp
import { src, dest, watch, series } from "gulp";

// PostCSS
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";
import purgecss from "@fullhuman/postcss-purgecss";
import cssnano from "cssnano";

import { paths } from "../paths";

function css() {
	const plugins = [
		cssImport,
		cssPresetEnv({
			stage: 2,
			features: {
				"nesting-rules": true,
				"custom-media-queries": true,
				"custom-selectors": true,
				"logical-properties-and-values": true,
				"lab-function": true
			}
		}),
		autoprefixer
	];

	return src(`${paths.css.src}/${paths.css.name}`)
		.pipe(postcss(plugins))
		.pipe(dest(paths.css.dest));
}

function cssPurgeMin() {
	const purge = purgecss({
		// Specify the paths to all of the template files in your project
		content: paths.css.purge.content,

		whitelist: ["hidden"],

		// Include any special characters you're using in this regular expression
		defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
	});

	const plugins = [purge, cssnano];

	return src(`${paths.css.dest}/${paths.css.name}`)
		.pipe(postcss(plugins))
		.pipe(dest(paths.css.dest));
}

function cssWatcher() {
	return watch(
		[`${paths.css.src}/**/*.css`, ...paths.css.additionalWatch],
		series(css)
	);
}

export { css, cssWatcher, cssPurgeMin };
