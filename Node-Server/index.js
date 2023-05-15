const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const fs = require('fs');
// var cookieParser = require('cookie-parser'); 
// var session = require('express-session');

var port = process.env.PORT || process.env.NODE_PORT || 11000;

const api = express();
api.use(compression());
api.use(bodyParser.json());
api.use(express.static(path.join(process.cwd(), '../Adam-Website/dist')));

api.get('/', (req,res) => {
  res.sendFile(path.join(process.cwd(), '../Adam-Website/dist/index.html'));
});
api.use('/MediaBucket', express.static(path.resolve(__dirname + '/MediaBucket')));


// Enable CORS for all methods
api.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


// #region Utility Functions
async function fetchJsonData(filepath) {
	try {
    const data = await fs.promises.readFile(filepath);
    const jsonData = await JSON.parse(data);
    return jsonData;
  } catch (err) {
    console.error(`Error reading JSON file: ${err}`);
    return null;
  }
}

// #endregion

// API REST Calls

// #region Get Experiences

// Gets the tile info for all experiences with the specified type
api.get('/tiles', (req, res) => {
	console.log(`Calling /tiles with type: ${req.query.type}`);
	fetchJsonData(path.join(__dirname, 'jsonDB/projects.json'))
	.then(data => {
		let projects = data["projects"].filter(proj => proj.type === req.query.type);
		projects.sort((a, b) => a.index - b.index);
		let tiles = [];
		for (item of projects) {
			tiles.push({
				"name": item["name"],
				"tileImage": item["tileImage"],
				"hoverImage": item["hoverImage"],
				"skills": item["skillList"]
			})
		}
		res.send({"tiles": tiles});
	});
});

// Gets the experience info used to display its Modal pop-up
api.get('/projectData', (req, res) => {
	console.log(`Calling /projectData with name: ${req.query.name}`);
	fetchJsonData(path.join(__dirname, 'jsonDB/projects.json'))
	.then(data => {
		let project = data["projects"].find(proj => proj.name === req.query.name);
		res.send({
			"name": project["name"], 
			"description": project["description"], 
			"mediaRefs": project["mediaList"]
		});
	});
});

// #endregion

// #region Get About Info

// Gets info for welcome section
api.get('/getWelcome', (req, res) => {
	console.log("Calling /getWelcome");
	fetchJsonData(path.join(__dirname, 'jsonDB/about.json'))
	.then(data => {
		res.send({
			"welcomeMedia": data["welcomeMedia"]
		});
	});
});

// Gets all of the info used in the About Me section
api.get('/getBio', (req, res) => {
	console.log("Calling /getBio");
	fetchJsonData(path.join(__dirname, 'jsonDB/about.json'))
	.then(data => {
		res.send({
			"bio": data["bio"],
			"interests": data["interests"],
			"langs": data["langs"],
			"software": data["software"],
			"contacts": data["contacts"]
		});
	});
});

// Gets the url for where my resume is hosted
api.get('/getResume', (req, res) => {
	console.log("Calling /getResume");
	fetchJsonData(path.join(__dirname, 'jsonDB/about.json'))
	.then(data => {
		res.send({"resumeUrl": data["resumeUrl"]});
	});
});

// #endregion

// Start the api
api.listen(port, function(err) {
	if (err) {
		throw err;
	}
	console.log(`Node Server listening on the port::${port}`);
});