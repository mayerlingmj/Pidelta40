// controllers/imageController.js
const Image = require('../models/Image')

const getImageData = async (req, res) => {
  try {
    const images = await Image.find()
    res.json(images)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  getImageData
}
