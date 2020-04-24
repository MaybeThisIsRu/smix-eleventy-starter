module.exports = function(eleventyConfig) {
    const filters = require("./ssg/filters");
    const shortcodes = require("./ssg/shortcodes");
    const utils = require("./ssg/utils");

    const isProduction = process.env.NODE_ENV === 'production' ? true : false;

    // *** Plugins
    // Nothing here right now.

    // *** Shortcodes
    // Jekyll replacement for post_url tag as an 11ty shortcode
    eleventyConfig.addShortcode("getUrl", shortcodes.postUrl);
    eleventyConfig.addShortcode("isOldPost", shortcodes.isOldPost);

    // *** Filters
    // Dates
    eleventyConfig.addFilter("friendlyDate", filters.friendlyDate);
    eleventyConfig.addFilter("dateInISO8601", filters.dateInISO8601);
    // Construct full URLs
    eleventyConfig.addLiquidFilter("absoluteUrl", filters.absoluteUrl);

    eleventyConfig.addCollection("posts", collection => collection.getFilteredByGlob("./posts/*.md").filter(post => isProduction ? !post.data.draft : true).reverse());

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