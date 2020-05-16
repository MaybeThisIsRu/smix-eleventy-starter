// *** Imports
const collectionFilters = require("./filters/collections");
const utils = require("./utils");

// *** Content Globs
const articlesDir = "src/content/articles/*.md";

module.exports = {
	articles: collection => {
		return collection
			.getFilteredByGlob(articlesDir)
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	}
};
