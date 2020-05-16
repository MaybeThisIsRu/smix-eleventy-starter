module.exports = {
	sortByDateDesc: (d1, d2) => {
		const date1 = new Date(d1);
		const date2 = new Date(d2);
		if (date1 > date2) {
			return -1;
		} else if (date1 < date2) {
			return 1;
		} else {
			// No change
			return 0;
		}
	}
};
