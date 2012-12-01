/*
Basic idea:

* collect list of torrents, update in background
* provide list, organized by show, to clients in JSON
* provide streaming video data from torrent to clients

TODO: add user/some MVC from https://github.com/madhums/nodejs-express-mongoose-demo


*/

var feedparser = require("feedparser"),
	nt = require("nt"),
	express = require("express"),
	mongoose = require('mongoose'),
	path = require("path"),
	fs = require("fs"),
	config = require("./config");

var pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json"), 'utf8'));

var app = express();

mongoose.connect(config.database);
var Show = mongoose.model('Show', require("./schema/show"));

// update cached RSS feed data
function updateFeeds(){
	console.log("Updating RSS data.");
}
updateFeeds();
setTimeout(updateFeeds, config.rssFrequency);

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, "public")));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// describe API
app.get('/api', function (req, res) {
	var info = {
		"name": pkg.name,
		"version": pkg.version,
		"description": pkg.description,
		"api": {
			"shows":['GET', 'POST'],
		}
	};
	res.send(info);
});

// get a single show
app.get('/api/shows/:id', function (req, res){
	Show.findById(req.params.id, function (err, show) {
		if (err)
			throw(err);
		res.send(show);
	});
});


// get list of shows
app.get('/api/shows', function (req, res){
	Show.find(function(err, shows){
		if (err)
			throw(err);
		res.send(shows);
	});
});




console.log("Listening on http://localhost:%s/", config.port);
app.listen(config.port);

