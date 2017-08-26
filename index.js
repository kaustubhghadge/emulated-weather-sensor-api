  
var db = require('./db');

//setting websocket connection
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:9090/');


//on getting data - push it to the database
ws.on('message', function incoming(data) {
  var devdata =JSON.parse(data);
  db.createWeatherObject(devdata);
});








