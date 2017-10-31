var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatusSchema = new Schema({
  title: String,
  author: String,
  text: String,
  user:
  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Status', StatusSchema);
