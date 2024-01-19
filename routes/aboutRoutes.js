const express = require('express')
const router = express.Router()

const aboutController = require('../controllers/aboutController')

// Define routes for the "About Us" section
router.get('/', aboutController.getAboutUsInfo)

module.exports = router
