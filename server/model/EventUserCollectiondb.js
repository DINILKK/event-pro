const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true // Automatically generated by MongoDB
  },
  username: {
    type: String,
    required: true, // Username of the person
    unique: true // Ensure each username is unique
  },
  role: {
    type: String,
    required: true, // Role of the user (e.g., "coordinator", "member")
    enum: ['coordinator', 'member'] // Restrict to specific roles
  },
  event_id: {
    type: String,
    required: true, // Reference to the corresponding event
    ref: 'Event' // This references the Event model
  }
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
