const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");


module.exports = function(eleventyConfig) {

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "---"
    })
    
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
    eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}