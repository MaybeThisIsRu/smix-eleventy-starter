import { spawn } from "child_process";
// import browserSync from "browser-sync";
// const server = browserSync.get("eleventyServer");

function build() {
	return spawn("npx", ["@11ty/eleventy", "--quiet"], {
		shell: true,
		stdio: "inherit"
	});
}

function watch() {
	return spawn("npx", ["@11ty/eleventy", "--port 8080", "--serve"], {
		shell: true,
		stdio: "inherit"
	});
}

// TODO
// Reload after asset tasks finish running etc.
// Waiting on https://github.com/11ty/eleventy/issues/1125
// function reload() {}

export { build as eleventyBuild, watch as eleventyWatch };
