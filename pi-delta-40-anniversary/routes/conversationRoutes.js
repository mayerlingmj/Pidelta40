const express = require('express')
const router = express.Router()

const conversationController = require('../controllers/conversationController')

// Define conversation-related routes
router.get('/', conversationController.getAllConversations)
router.get('/:id', conversationController.getConversationById)
router.post('/', conversationController.createConversation)
router.put('/:id', conversationController.updateConversation)
router.delete('/:id', conversationController.deleteConversation)

module.exports = router
