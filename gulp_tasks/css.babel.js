// Gulp
import { src, dest, watch } from "gulp";

// PostCSS
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import cssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";
import purgecss from "@fullhuman/postcss-purgecss";
import cssnano from "cssnano";

import { paths } from "../config.js";

function css() {
	const plugins = [cssImport, tailwindcss, cssNesting, autoprefixer];

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

	const targetDir = paths.css.dest.substring(2);

	return src(`${targetDir}/${paths.css.name}`)
		.pipe(postcss(plugins))
		.pipe(dest(targetDir));
}

function cssWatcher() {
	return watch(`${paths.css.src}/**/*.css`, css);
}

export { css, cssWatcher, cssPurgeMin };
