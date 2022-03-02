const env = require("./eleventy/env");

const plugins = [
	require("postcss-import"),
	require("postcss-preset-env")({
		stage: 2,
		features: {
			"nesting-rules": true,
			"custom-media-queries": true,
			"custom-selectors": true,
			"logical-properties-and-values": true,
			"lab-function": true
		}
	}),
	require("autoprefixer")
];

if (env.is11tyProduction) {
	plugins.push(require("cssnano"));
}

module.exports = {
	plugins: plugins
};
