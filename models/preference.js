const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preferenceSchema = new Schema({
  allergy:String,
  amenity: String,
  favorites: String,
  executiveId: String,
  eventId:String
});

module.exports = mongoose.model('Preference', preferenceSchema);
