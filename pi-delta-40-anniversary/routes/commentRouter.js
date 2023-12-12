const express = require('express')
const commentController = require('../controllers/commentController')
const middleware = require('../middleware')

const router = express.Router()

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  commentController.createComment
)

router.get(
  '/',
  commentController.getComments,
  middleware.stripToken,
  middleware.verifyToken
)

router.get(
  '/:id',
  commentController.getCommentById,
  middleware.stripToken,
  middleware.verifyToken
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  commentController.updateComment
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  commentController.deleteComment
)

module.exports = router
