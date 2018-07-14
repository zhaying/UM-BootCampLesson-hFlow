const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  meeting: String,
  eventName: String,
  month: String,
  dates: String,
  resumeType: String,
  executiveId: String,
  preferenceId: String
});

module.exports = mongoose.model('Event', eventSchema);
