const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  info: Schema.Types.Mixed,
  meetingOverview: Schema.Types.Mixed,
  attendance: Schema.Types.Mixed,
  keyMeetingContacts: Schema.Types.Mixed,
  offSiteActivities: Schema.Types.Mixed,
  shuttleSchedules: Schema.Types.Mixed,
  executives: Schema.Types.Mixed,
  authorizedSignatures: Schema.Types.Mixed
});

module.exports = mongoose.model('Resume', resumeSchema);
