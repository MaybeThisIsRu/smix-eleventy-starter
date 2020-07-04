const { parseISO, format, formatISO, max } = require("date-fns");
const { utcToZonedTime } = require("date-fns-tz");

module.exports = {
	prepareDate: d => {
		// format() expects Date or Number
		// YAML dates are already in ISO8601 and it gives us dates in UTC.
		// They may be a string or an object.
		// If string, convert to ISO date object first.
		// If an object, no need to do anything. We can directly format it.
		switch (typeof d) {
			case "string":
				return parseISO(d);
			case "object":
			default:
				return d;
		}
	},
	friendlyDate: d => {
		const date = utcToZonedTime(
			module.exports.prepareDate(d),
			"Asia/Kolkata"
		);
		return format(date, "d MMMM yyyy");
	},
	dateInISO8601: d => {
		return formatISO(module.exports.prepareDate(d));
	},
	lastUpdatedDate: collection => {
		// Newest date in the collection (of published or updated)
		if (!collection || !collection.length) {
			throw new Error("Collection is empty in lastUpdatedDate filter.");
		}
		let lastPublishedDate, lastUpdatedDate;

		// Filter those items which have an update date
		let itemsWithUpdatedKey = collection.filter(
			item =>
				item.data.updated &&
				item.data.updated != null &&
				item.data.updated != ""
		);

		// Compare for highest and store that date
		if (!itemsWithUpdatedKey.length) lastUpdatedDate = null;
		else if (itemsWithUpdatedKey.length === 1)
			lastUpdatedDate = module.exports.dateInISO8601(
				itemsWithUpdatedKey[0].data.updated
			);
		else {
			for (
				let index = 0, endIndex = itemsWithUpdatedKey.length - 1;
				index < endIndex;
				index++
			) {
				let currentDate = module.exports.dateInISO8601(
					itemsWithUpdatedKey[index].data.updated
				);
				let nextDate = module.exports.dateInISO8601(
					itemsWithUpdatedKey[index + 1].data.updated
				);
				if (nextDate > currentDate) currentDate = nextDate;
				if (index === endIndex - 1) lastUpdatedDate = currentDate;
			}
		}

		// Collection should be sorted in descending order by date. We can then just pick out the most recent entry using the first index.
		lastPublishedDate = module.exports.dateInISO8601(collection[0].date);

		return !lastUpdatedDate
			? lastPublishedDate
			: module.exports.dateInISO8601(
					max([
						parseISO(lastPublishedDate),
						parseISO(lastUpdatedDate)
					])
			  );
	}
};
