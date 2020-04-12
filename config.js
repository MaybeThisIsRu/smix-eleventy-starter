const path = require("path");

// Src
const projectSrcDir = path.resolve(__dirname, ".");
const assetSrcDir = path.resolve(__dirname, "assets");
// Dist
const projectDestDir = path.resolve(__dirname, "dist");
const assetDestDir = `${projectDestDir}/assets`;

const paths = {
	html: {
		src: `${projectSrcDir}/*.html`,
		dest: projectDestDir
	},
	img: {
		src: `${assetSrcDir}/img/**/*.{png,jpg,jpeg,svg}`,
		dest: `${assetDestDir}/img`
	},
	js: {
		entryDir: `${assetSrcDir}/js`,
		entry: "index.js",
		outputDir: `${assetDestDir}/js`,
		output: "index.js"
	},
	css: {
		src: `${assetSrcDir}/css`,
		dest: `${assetDestDir}/css`,
		name: "style.css",
		purge: {
			content: [`${projectDestDir}/**/*.html`]
		}
	},
	projectDestDir: projectDestDir
};

export { paths };
