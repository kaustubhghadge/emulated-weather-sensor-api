// Load mongoose package and connect to MongoDB and create/use database called weatherData
var mongoose = require('mongoose'),
Promise = require('bluebird');
mongoose.connect('mongodb://localhost/weatherData');

// Create a schema
var WeatherSchema = new mongoose.Schema({
  device_id: String,
  temperature: Number,
  humidity: Number,
  updated_at: { type: Date, default: Date.now },
});


// Create a model based on the schema
var Weather = mongoose.model('Weather', WeatherSchema);


/*
	DB Methods
*/

//create a weather entry in database
function createWeatherObject(devdata){
    var weather_data = {
    	device_id:devdata.deviceId,
    	temperature: parseFloat(devdata.temperature),
    	humidity: parseFloat(devdata.humidity)
    }

    Weather.create(weather_data, function(err, weather){
      if(err) console.log(err);
      else console.log(weather);
    });

}

function getWeatherData(){
    return new Promise(function (resolve, reject){
          Weather.find(function(err,weather) {
              if (err) return console.error(err);
              else resolve(weather)
      });  
    });
}

module.exports= {
	createWeatherObject:createWeatherObject,
  getWeatherData:getWeatherData
}