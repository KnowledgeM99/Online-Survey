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
    required: true,
    default: Date.now,
    get: (v) => {
      return new Date(moment(v, 'DD/MM/YYYY HH:mm:ss').toDate().getTime() + (new Date().getTimezoneOffset() * 60000));
    },
  },
});

const Feedback = mongoose.model('Survey', feedbackSchema);

module.exports = Feedback;
