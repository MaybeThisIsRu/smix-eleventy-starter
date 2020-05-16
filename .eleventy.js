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

	// *** Misc Options
	// Additional files to watch for changes
	config.addWatchTarget("./eleventy/");

	// *** Forestry CMS Config
	// Run serve on 0.0.0.0 on staging
	if (env.is11tyStaging)
		config.setBrowserSyncConfig({
			host: "0.0.0.0"
		});

	// Copy as-is from root to output path
	// We can avoid this on development env
	if (env.is11tyStaging || env.is11tyProduction)
		config.addPassthroughCopy("admin");

	// *** Plugins
	// Nothing here right now.

	// *** Shortcodes
	// Jekyll replacement for post_url tag as an 11ty shortcode
	config.addShortcode("getUrl", shortcodes.postUrl);
	config.addShortcode("isOldPost", shortcodes.isOldPost);

	// *** Filters
	// Dates
	config.addFilter("friendlyDate", dateFilters.friendlyDate);
	config.addFilter("dateInISO8601", dateFilters.dateInISO8601);
	// Filter posts per tag
	config.addFilter("byTag", collectionFilters.byTag);
	// Optional - absolute url
	config.addFilter("absoluteUrl", urlFilters.absoluteUrl);
	// Optional - overriding RSS plugin's filter so we can parse the date using our own date filters
	config.addNunjucksFilter("rssLastUpdatedDate", dateFilters.lastUpdatedDate);

	// *** Collections
	// Articles
	config.addCollection("articles", collections.articles);

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
