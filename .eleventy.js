module.exports = function(eleventyConfig) {

    // Add any filters, plugins, shortcodes, collections here...
    // eleventyConfig.doSometing();

    eleventyConfig.addCollection("posts", collection => collection.getFilteredByGlob("./posts/*.md").reverse());

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