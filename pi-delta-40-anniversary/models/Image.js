// models/Image.js
const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image
