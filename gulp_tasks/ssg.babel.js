import { spawn } from "child_process";

function eleventy() {
    return spawn(
        "npx",
        [
            "@11ty/eleventy",
            "--quiet"
        ],
        { shell: true, stdio: "inherit" }
    );
}

export { eleventy as eleventyBuild };
