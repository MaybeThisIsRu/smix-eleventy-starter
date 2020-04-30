module.exports = function(config) {
	const filters = require("./ssg/filters");
	const shortcodes = require("./ssg/shortcodes");
	const utils = require("./ssg/utils");

	const isProduction = process.env.NODE_ENV === "production" ? true : false;

	// *** Misc Options
	// Additional files to watch for changes
	config.addWatchTarget("./ssg/");

	// *** Forestry CMS Config
	// Run serve on 0.0.0.0 on staging
	if (process.env.ELEVENTY_ENV == "staging") {
		config.setBrowserSyncConfig({
			host: "0.0.0.0"
		});
	}
	// Copy as-is from root to output path
	config.addPassthroughCopy("admin");

	// *** Plugins
	// Nothing here right now.

	// *** Shortcodes
	// Jekyll replacement for post_url tag as an 11ty shortcode
	config.addShortcode("getUrl", shortcodes.postUrl);
	config.addShortcode("isOldPost", shortcodes.isOldPost);

	// *** Filters
	// Dates
	config.addFilter("friendlyDate", filters.friendlyDate);
	config.addFilter("dateInISO8601", filters.dateInISO8601);
	// Filter specified collection by tag
	config.addFilter("byTag", filters.byTag);

	// *** Internal filter functions
	// const liveItems = item => item.date <= new Date();
	const publishedItems = item => (isProduction ? !item.data.draft : true);

	// *** Collections
	// Blog posts
	config.addCollection("posts", collection => {
		return collection
			.getFilteredByGlob("posts/*.md")
			.filter(publishedItems)
			.reverse();
	});

	return {
		pathPrefix: "/", // useful for GitHub pages
		dir: {
			input: "./",
			output: "./dist",
			includes: "includes",
			layouts: "layouts",
			data: "data"
		}
	};
};
