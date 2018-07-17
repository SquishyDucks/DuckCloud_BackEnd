const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  mimetype: {
    type: String,
    required: true
  },
  extension: {
    type: String,
    required: false
  },
  tags: {
    type: String,
    required: false
  },
  parent: {
    type: String,
    required: false
  },
  ancestors: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Upload', uploadSchema)
