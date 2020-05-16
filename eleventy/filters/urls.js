const { URL } = require("url");

module.exports = {
	absoluteUrl: (url, base) => {
		try {
			return new URL(url, base).toString();
		} catch (e) {
			console.error(
				`Trying to convert ${url} to be an absolute url with base ${base} and failed, returning: ${url} (invalid url)`
			);
			return url;
		}
	}
};
