var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

var CitySchema = new Schema({
  city: String,
});


var User = mongoose.model('City', CitySchema);
module.exports = City;
