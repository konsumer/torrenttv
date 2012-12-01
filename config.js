var config = {};

config.port = process.env.PORT || 8080;
config.database = process.env.DB || 'mongodb://localhost/torrenttv';

config.rssFrequency = 3600000; // in ms: 1 hour


module.exports = config;