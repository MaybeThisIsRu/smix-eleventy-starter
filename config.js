// Config
const assetBase = "./assets";

const paths = {
	img: {
		src: `${assetBase}/src/img/**/*.{png,jpg,jpeg,svg}`,
		dest: `${assetBase}/img`
	},
	js: {
		entryDir: `${assetBase}/src/js/`,
		entry: "index.js",
		outputDir: `${assetBase}/js/`,
		output: "index.js"
	},
	css: {
		src: `${assetBase}/src/css`,
		dest: `${assetBase}/css`,
		name: "style.css",
		purge: {
			content: [`${assetBase}/src/js/**/*.{js,jsx}`]
		}
	}
};

export { paths };
