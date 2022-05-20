const mongoose = require('mongoose');

const guidesLaunches = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },  
  email: {
      type: String,
      required: true
  },
  phoneNo: {
      type: String,
      required: true
  },
  rate: {
      type: String,
      required: true
  },
  gender: {
      type: String,
      required: true
  },
  location: {
      type: Object,
      required: true
  },
  picture: {
      type: String,
      required: true
  },
  userId: {
      type: String,
      required: true
  },
  email_verified: {
      type: Boolean,
      required: true
  },
  cityName: {
      type: String,
      required: true
  },
  clients: [Object]
});

module.exports = mongoose.model('Guide', guidesLaunches);