const express = require('express')
const router = express.Router()

const lineageController = require('../controllers/lineageController')

// Define routes for the lineage section
router.get('/', lineageController.getLineageInfo)

module.exports = router
