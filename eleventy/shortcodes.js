module.exports = {
	postUrl: (collection, slug) => {
		try {
			if (collection.length < 1) throw "Collection appears to be empty";
			if (!Array.isArray(collection))
				throw "Collection is an invalid type - it must be an array!";
			if (typeof slug !== "string")
				throw "Slug is an invalid type - it must be a string!";

			const found = collection.find(p => p.fileSlug.includes(slug));
			if (found === 0 || found === undefined)
				throw `${slug} not found in specified collection.`;
			else return found.url;
		} catch (e) {
			console.error(
				`An error occured while searching for the url to ${slug}. Details:`,
				e
			);
		}
	},
	isOldPost: date => {
		const { getUnixTime } = require("date-fns");

		const postTimestamp = getUnixTime(new Date(date));

		const cutoffTimestamp = getUnixTime(
			new Date().setFullYear(new Date().getFullYear() - 1)
		);

		// QUESTION Is this one of the ideal ways to compare dates?
		if (cutoffTimestamp < postTimestamp) {
			return false;
		} else {
			return true;
		}
	},
	/**
	 * @param {string} key
	 * @returns {any}
	 */
	getOwnerInfo: key => {
		const { authors } = require(process.cwd() + "/src/data/site.json");
		const owner = authors.filter(author =>
			author.roles.includes("owner")
		)[0];

		return owner[key];
	}
};
