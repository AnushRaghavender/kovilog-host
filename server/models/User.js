const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  likes: [
    {
      temple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Temple'
      },
      name: {
        type: String,
      },
      image: {
        type: String
      }
    }
  ],
  likes1: [
    {
      temple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Temple'
      },
      name: {
        type: String,
      },
      image: {
        type: String
      }
    }
  ]
});

module.exports = User = mongoose.model('User', UserSchema);
