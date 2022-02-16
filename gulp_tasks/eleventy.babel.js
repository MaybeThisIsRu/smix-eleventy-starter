import { spawn } from "child_process";

function build() {
	return spawn("npx", ["@11ty/eleventy", "--quiet"], {
		shell: true,
		stdio: "inherit"
	});
}

function watch() {
	return spawn(
		"npx",
		["@11ty/eleventy", "--port 8080", "--serve", "--incremental"],
		{
			shell: true,
			stdio: "inherit"
		}
	);
}

export { build as eleventyBuild, watch as eleventyWatch };
