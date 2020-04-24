var merge = require("lodash.merge");

module.exports = function () {
    var src = {
        default: {},
        development: {
            siteBaseUrl: "http://localhost:3000/"
        },
        production: {
            siteBaseUrl: "https://rusingh.com/"
        }
    };

    var config = merge({}, src.default);
    process.env.NODE_ENV === "production"
        ? merge(config, src.production)
        : merge(config, src.development);

    return config;
};