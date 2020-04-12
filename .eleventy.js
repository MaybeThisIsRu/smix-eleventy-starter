module.exports = function(eleventyConfig) {

    // Add any filters, plugins, shortcodes, collections here...
    // eleventyConfig.doSometing();

    return {
        pathPrefix: '/', // useful for GitHub pages
        dir: {
            input: "./",
            output: "./dist",
            includes: "includes",
            layouts: "layouts",
            data: "data"
        },
    };
}