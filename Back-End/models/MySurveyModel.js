const mongoose = require('mongoose');
const moment = require('moment-timezone');

const feedbackSchema = new mongoose.Schema({
  ageRange: String,
  gender: String,
  feedback: String,
  options: [{
    name: String,
    value: Boolean
  }],
  dropdownValue: String,
  created_at: {
    type: Date,
    default: moment().tz("Africa/Harare").format('DD/MM/YYYY HH:mm:ss')
  }
});

const Feedback = mongoose.model('Survey', feedbackSchema);

module.exports = Feedback;
