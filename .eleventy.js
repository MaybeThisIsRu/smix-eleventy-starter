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
	config.addPlugin(require("@11ty/eleventy-plugin-rss"));
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

	// *** Shortcodes
	// Jekyll replacement for post_url tag as an 11ty shortcode
	config.addShortcode("getUrl", shortcodes.postUrl);
	config.addShortcode("getOwnerInfo", shortcodes.getOwnerInfo);
	config.addShortcode("isOldPost", shortcodes.isOldPost);

	// *** Filters
	// Dates
	config.addFilter("friendlyDate", dateFilters.friendlyDate);
	config.addFilter("dateInISO8601", dateFilters.dateInISO8601);
	// Filter posts per tag
	config.addFilter("byTag", collectionFilters.byTag);
	// Absolute url
	config.addFilter("absoluteUrl", urlFilters.absoluteUrl);
	// Parse the date using our own date filters to account for any article updates; overriding 11ty's RSS plugin
	config.addNunjucksFilter("rssLastUpdatedDate", dateFilters.lastUpdatedDate);
	// config.addFilter("htmlToAbsoluteUrls", feedFilters.htmlToAbsoluteUrls);

	// *** Collections
	// Articles
	config.addCollection("articles", collections.articles);

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
