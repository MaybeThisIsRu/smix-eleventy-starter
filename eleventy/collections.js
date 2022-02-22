// *** Imports
const collectionFilters = require("./filters/collections");
const utils = require("./utils");

// *** Content Globs
const articleDir = "src/content/post/article/*.md";
const noteDir = "src/content/post/note/*.md";
const photoDir = "src/content/post/photo/*.md";

module.exports = {
	article: collection => {
		return collection
			.getFilteredByGlob(articleDir)
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	},
	note: collection => {
		return collection
			.getFilteredByGlob(noteDir)
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	},
	photo: collection => {
		return collection
			.getFilteredByGlob(photoDir)
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	},
	primary: collection => {
		return collection
			.getFilteredByGlob([articleDir, noteDir, photoDir])
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	}
};
