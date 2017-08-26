/* 
	Web Server connecting to emulated IoT device and getting realtime data using websockets.
	Store the data in MongoDB
	Setup REST API endpoints
*/

var env = process.env.NODE_ENV || 'development',
    config = require('./env')[env];

var restify = require('restify');  
var db = require('./db');

//setting websocket connection
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:9090/');

//on connection error terminate
ws.on('error',function error() {
	ws.terminate();
})

//on connection open get data
ws.on('open', function open() {

		  ws.on('error',function error() {
			ws.close();
			})

		  //on getting data - push it to the database
		  ws.on('message', function incoming(data) {
		  	var devdata =JSON.parse(data);
		  	db.createWeatherObject(devdata);
			});
});

var server = restify.createServer();

function getWeatherData(req,res,next){
		db.getWeatherData().then(function(weather){
			res.send(weather);
			})
		.catch(function(e){
				console.log(e);
			});
}



// API Endpoints
server.get('/weather', getWeatherData);

server.listen(config.port, function() {
  console.log('%s listening at %s', server.name, server.url);
});



