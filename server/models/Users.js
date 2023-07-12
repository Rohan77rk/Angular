const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// List of columns for Employee schema
let UsersSchema = new mongoose.Schema({
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
  collection: "users"
});

// Hash the password before saving
UsersSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('Password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.Password, salt);
    this.Password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model('Users', UsersSchema);
