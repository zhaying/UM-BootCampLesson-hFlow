const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  meeting: String,
  eventName: String,
  dates: String,
  resumeType: String,
  preferenceId: String,
  executiveId: String
});

module.exports = mongoose.model('Event', eventSchema);
