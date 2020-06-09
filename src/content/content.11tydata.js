const env = require("../../eleventy/env");

module.exports = () => {
	return {
		eleventyComputed: {
			permalink: data => {
				return env.is11tyProduction
					? data.draft
						? false
						: data.permalink
					: data.permalink;
			}
		}
	};
};
