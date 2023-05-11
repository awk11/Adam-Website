const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const fs = require('fs');
// var cookieParser = require('cookie-parser'); 
// var session = require('express-session');

var port = process.env.PORT || process.env.NODE_PORT || 11001;

const api = express();
api.use(compression());
api.use(bodyParser.json());
api.use(express.static(process.cwd() + '/Adam-Website'));

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

// #region Authentication
api.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	//TODO: Authentication
});

// #endregion

// #region Get Experiences

// Gets the tile info for all experiences with the specified type
api.get('/tiles', (req, res) => {
	console.log(`Calling /tiles with type: ${req.query.type}`);
	res.header("Access-Control-Allow-Origin", "*");
	fetchJsonData(path.join(__dirname, 'jsonDB/projects.json'))
	.then(data => {
		let projects = data["projects"].filter(proj => proj.type === req.query.type);
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
	res.header("Access-Control-Allow-Origin", "*");
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
	console.log("Calling /getWelcome")
	res.header("Access-Control-Allow-Origin", "*");
	fetchJsonData(path.join(__dirname, 'jsonDB/about.json'))
	.then(data => {
		res.send({
			"welcomeMedia": data["welcomeMedia"]
		});
	});
});

// Gets all of the info used in the About Me section
api.get('/getBio', (req, res) => {
	console.log("Calling /getBio")
	res.header("Access-Control-Allow-Origin", "*");
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
	console.log("Calling /getResume")
	res.header("Access-Control-Allow-Origin", "*");
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