// Load mongoose package and connect to MongoDB and create/use database called weatherData
var mongoose = require('mongoose');
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


module.exports= {
	createWeatherObject:createWeatherObject
}