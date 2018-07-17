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
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  parent: {
    type: String,
    required: true
  },
  ancestors: {
    type: String,
    required: true
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
