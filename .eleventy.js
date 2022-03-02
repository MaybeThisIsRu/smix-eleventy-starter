module.exports = function(config) {
	// *** Collection imports
	const collections = require("./eleventy/collections");

	// *** Filter imports
	const collectionFilters = require("./eleventy/filters/collections");
	const urlFilters = require("./eleventy/filters/urls");
	const dateFilters = require("./eleventy/filters/dates");

	// *** Shortcode imports
	const shortcodes = require("./eleventy/shortcodes");

	// *** Misc imports
	const env = require("./eleventy/env");

	// *** Plugins
	const rssPlugin = require("@11ty/eleventy-plugin-rss");
	config.addPlugin(rssPlugin);
	// Syntax highlighting
	config.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
	// Typeset
	if (env.is11tyProduction || env.is11tyStaging)
		config.addPlugin(require("eleventy-plugin-typeset")());
	// Safe external links
	config.addPlugin(require("@hirusi/eleventy-plugin-safe-external-links"), {
		pattern: "https{0,1}://", // RegExp pattern for external links
		noopener: true, // Whether to include noopener
		noreferrer: true, // Whether to include noreferrer
		files: [
			// What output file extensions to work on
			".html"
		]
	});
	// Minified HTML.
	if (env.is11tyProduction || env.is11tyStaging) {
		config.addPlugin(require("@sardine/eleventy-plugin-tinyhtml"));
	}
	const Image = require("@11ty/eleventy-img");

	async function imageShortcode(src, alt, extraAttrs, sizes = "100vw") {
		if (alt === undefined) {
			// You bet we throw an error on missing alt (alt="" works okay)
			throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
		}

		let metadata = await Image(src, {
			widths: [600, null],
			formats: ["avif", "webp", "jpeg"],
			urlPath: "/assets/img/",
			outputDir: "./dist/assets/img/"
		});

		let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

		return `<picture>
    ${Object.values(metadata)
		.map(imageFormat => {
			return `  <source type="${
				imageFormat[0].sourceType
			}" srcset="${imageFormat
				.map(entry => entry.srcset)
				.join(", ")}" sizes="${sizes}">`;
		})
		.join("\n")}
      <img
        src="${highsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async"
		${extraAttrs}
		>
    </picture>`;
	}

	// *** Shortcodes
	// Jekyll replacement for post_url tag as an 11ty shortcode
	config.addShortcode("getUrl", shortcodes.postUrl);
	config.addShortcode("getOwnerInfo", shortcodes.getOwnerInfo);
	config.addShortcode("getPostType", shortcodes.getPostType);
	config.addShortcode("isOldPost", shortcodes.isOldPost);
	config.addLiquidShortcode("image", imageShortcode);

	// *** Filters
	// Dates
	config.addFilter("friendlyDate", dateFilters.friendlyDate);
	config.addFilter("dateToIso8601", dateFilters.dateToIso8601);
	// Filter posts per tag
	config.addFilter("byTag", collectionFilters.byTag);
	// Absolute url
	config.addFilter("absoluteUrl", urlFilters.absoluteUrl);

	// The official RSS plugin exports only Nunjucks filters. They can be used with Liquid like so.
	config.addFilter("htmlToAbsoluteUrls", rssPlugin.convertHtmlToAbsoluteUrls);
	config.addFilter("dateToRfc3339", rssPlugin.dateToRfc3339);
	config.addFilter(
		"getNewestCollectionItemDate",
		rssPlugin.getNewestCollectionItemDate
	);

	// *** Collections
	// Articles
	config.addCollection("primary", collections.primary);

	// *** Misc
	// Copy fonts as-is.
	config.addPassthroughCopy({ "src/assets/font": "assets/font" });

	return {
		pathPrefix: "/", // useful for GitHub pages
		dir: {
			input: "./",
			output: "dist",
			includes: "src/includes",
			layouts: "src/layouts",
			data: "src/data"
		}
	};
};
