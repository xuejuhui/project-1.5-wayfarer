var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/wayfarer");
module.exports.User = require('./user');
module.exports.Status = require('./status');
