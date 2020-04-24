const { URL } = require("url");
const utils = require("./utils");
const { parseISO, format, formatISO } = require("date-fns");
const { utcToZonedTime } = require("date-fns-tz");

module.exports = {
    absoluteUrl: (url, base) => {
        try {
            return (new URL(url, base)).toString()
        } catch (e) {
            console.error("Trying to convert %o to be an absolute url with base %o and failed, returning: %o (invalid url)", url, base, url)
            return url;
        }
    },
    byTag: (collection, tag) => {
        if (!collection.length) return [];

        collection = collection.filter(item => item.data.tags ? item.data.tags.includes(tag) : false);

        collection = collection.sort((item1, item2) => utils.sortByDateDesc(item1.date, item2.date));

        return collection;
    },
    prepareDate: (d) => {
        // format() expects Date or Number
        // YAML dates are already in ISO8601 and it gives us dates in UTC.
        // They may be a string or an object.
        // If string, convert to ISO date object first.
        // If an object, no need to do anything. We can directly format it.
        switch (typeof d) {
            case 'string':
                return parseISO(d);
            case 'object':
            default:
                return d;
        }
    },
    friendlyDate: (d) => {
        const date = utcToZonedTime(module.exports.prepareDate(d), "Asia/Kolkata");
        return format(date, 'd MMMM yyyy');
    },
    dateInISO8601: d => {
        return formatISO(module.exports.prepareDate(d));
    },
    slugify: (string) => {
        // This is based on Jekyll v4's raw mode slugify filter

        // First, find all instaces in the string and replace with a hypen
        let slug = string.replace('\s+', '-');

        //  Remove leading / trailing hyphen
        slug = slug.replace(/% r! ^\-|\-$!i/, "");

        // Convert to downcase and return
        return slug.toLowerCase();
    }
};