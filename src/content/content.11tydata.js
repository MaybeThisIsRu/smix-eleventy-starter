const env = require("../../eleventy/env");

/**
 *
 * @param {object} data
 * @returns {string|false}
 */
const getPermalink = data => {
	return env.is11tyProduction
		? data.draft
			? false
			: data.permalink
		: data.permalink;
};

module.exports = () => {
	return {
		eleventyComputed: {
			permalink: getPermalink,
			eleventyExcludeFromCollections: data =>
				getPermalink(data) ? false : true
		}
	};
};
