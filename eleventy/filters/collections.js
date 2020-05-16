const utils = require("../utils");
const env = require("../env");

module.exports = {
	liveItems: item => (env.is11tyProduction ? item.date <= new Date() : true),
	publishedItems: item => (env.is11tyProduction ? !item.data.draft : true),
	sortByOrder: (a, b) =>
		a.data.order === b.data.order
			? 0
			: a.data.order > b.data.order
			? -1
			: 1,
	sortByDate: (a, b) => utils.sortByDateDesc(a.date, b.date),
	byTag: (collection, tag) => {
		if (!collection.length) return [];

		collection = collection.filter(item => {
			if (item.data.tags) {
				// Convert data.tags and tag to lowercase
				const lcTags = item.data.tags.map(tag => tag.toLowerCase());
				const filterTag = tag.toLowerCase();
				return lcTags.includes(filterTag) ? true : false;
			}
		});

		collection = collection.sort((item1, item2) =>
			utils.sortByDateDesc(item1.date, item2.date)
		);

		return collection;
	},
	sideProjects: item =>
		item.data.tags
			? item.data.tags.includes("side-project")
				? true
				: false
			: false,
	clientProjects: item => !module.exports.sideProjects(item)
};
