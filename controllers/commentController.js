const { Comment } = require('../models')

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create({ ...req.body })
    res.status(201).json({ comment })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to create comment' })
  }
}

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    console.log('Fetched comments:', comments)
    res.json({ comments })
  } catch (error) {
    console.error('Error fetching comments:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getCommentById = async (req, res) => {
  const { id } = req.params
  try {
    const comment = await Comment.findById(id)
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' })
    }
    res.json({ comment })
  } catch (error) {
    console.error('Error fetching comment details:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const updateComment = async (req, res) => {
  const { id } = req.params
  const { content, replies } = req.body
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { content, replies },
      { new: true }
    )
    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' })
    }
    res.json({ updatedComment })
  } catch (error) {
    console.error('Error updating comment:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const deleteComment = async (req, res) => {
  const { id } = req.params
  try {
    const deletedComment = await Comment.findByIdAndDelete(id)
    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' })
    }
    res.json({ message: 'Comment deleted successfully' })
  } catch (error) {
    console.error('Error deleting comment:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment
}
