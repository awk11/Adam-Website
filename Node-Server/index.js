// Setup
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

// API REST Calls

api.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	//TODO: Authentication
})

api.get('/tiles', (req, res) => {
	//TODO: Grab data from db
	console.log("Calling /tiles")
	fetchJsonData(path.join(__dirname, 'jsonDB/projects.json'))
	.then(data => {
		let projects = data["projects"].filter(proj => proj.type === req.query.type)
		let tiles = []
		for (item of projects) {
			tiles.push({
				"name": item["name"],
				"tileImage": item["tileImage"],
				"hoverImage": item["hoverImage"],
				"skills": item["skillList"]
			})
		}
		res.header("Access-Control-Allow-Origin", "*");
		res.send({"tiles": tiles});
	});
})

api.get('/projectData', (req, res) => {
	console.log("Calling /projectData")
	res.header("Access-Control-Allow-Origin", "*");
	fetchJsonData(path.join(__dirname, 'jsonDB/projects.json'))
	.then(data => {
		let project = data["projects"].find(proj => proj.name === req.query.name)
		res.send({"name": project["name"], "description": project["description"], "mediaRefs": project["mediaList"]})
	});
})

api.listen(port, function(err) {
	if (err) {
		throw err;
	}
	console.log(`Node Server listening on the port::${port}`);
});