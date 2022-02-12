import { spawn } from "child_process";
import browserSync from "browser-sync";

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

// Reload after asset tasks finish running etc.
function reload() {
	const server = browserSync.get("eleventy-server");
	if (server) server.reload();
}

export { build as eleventyBuild, watch as eleventyWatch, reload };
