const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    
    eleventyConfig.addFilter("asPostDate", (dateObj) => {
        // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
        return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd HH:mm');
    })
    eleventyConfig.addFilter("isoString", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toISO();
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}