const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const executiveSchema = new Schema({
  name:String,
  title: String,
  preferences: String,
  currentEvent: String,
  preferenceId: String,
  eventId: String
});

module.exports = mongoose.model('Executive', executiveSchema);
