const { URL } = require("url");
const config = require("../../src/data/config.js")();

module.exports = {
	absoluteUrl: (url, base = config.siteBaseUrl) => {
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
