const mongoose = require('mongoose');

const TempleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  temple_number: {
    type: String,
    required: true
  },
  temple_name: {
    type: String,
    required: true
  },
  deity: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  timings: {
    type: String,
    required: true
  },
  auspicious_day: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  perumal: {
    type: String,
    required: true
  },
  thayar: {
    type: String,
    required: true
  },
  temple_category: {
    type: String,
    required: true
  },
  mantra: {
    type: String,
    required: true
  },
  architecture_style: {
    type: String,
    required: true
  },
  built_by: {
    type: String,
    required: true
  },
  built_in: {
    type: String,
    required: true
  },
  pushkarani: {
    type: String,
    required: true
  },
  vimanam: {
    type: String,
    required: true
  },
  saints_associated: {
    type: String,
    required: true
  },
  sthala_puranam: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      name: {
        type: String
      }
    }
  ],
  likes1: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      name: {
        type: String
      }
    }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      date: {
        type: String
      }
    }
  ]
});

module.exports = Temple = mongoose.model('Temple', TempleSchema);
