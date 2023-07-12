const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// List of columns for Employee schema
let AdminSchema = new mongoose.Schema({
  Name: {
    type: String
  },
  Email: {
    type: String
  },
  Password: {
    type: String
  }
}, {
  collection: "admin"
});


module.exports = mongoose.model('Admin', AdminSchema);
