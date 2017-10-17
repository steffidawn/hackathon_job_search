var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  list: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;