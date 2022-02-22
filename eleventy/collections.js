// *** Imports
const collectionFilters = require("./filters/collections");
const utils = require("./utils");

// *** Content Globs
const articleDir = "src/content/post/article/*.md";
const noteDir = "src/content/post/note/*.md";
const photoDir = "src/content/post/photo/*.md";
const replyDir = "src/content/post/reply/*.md";

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
	reply: collection => {
		return collection
			.getFilteredByGlob(replyDir)
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	},
	primary: collection => {
		return collection
			.getFilteredByGlob([articleDir, noteDir, photoDir, replyDir])
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	}
};
