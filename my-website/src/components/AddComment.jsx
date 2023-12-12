import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  createComment,
  updateComment,
  deleteComment
} from '../services/commentService'

const AddComment = ({ user }) => {
  const [comment, setComment] = useState({
    content: '',
    user: user.id
  })

  const { commentId } = useParams()
  const navigate = useNavigate()

  const handleCommentChange = (event) => {
    setComment({
      ...comment,
      [event.target.id]: event.target.value
    })
  }

  const handleCommentSubmit = async (event) => {
    event.preventDefault()

    try {
      await createComment(comment)
      setComment({ content: '', user: user ? user.id : '' })
      navigate('/comments')
    } catch (error) {
      console.error(error)
    }
  }

  const handleCommentUpdate = async () => {
    try {
      await updateComment(commentId, comment)
      navigate('/comments')
    } catch (error) {
      console.error(error)
    }
  }

  const handleCommentDelete = async () => {
    try {
      await deleteComment(commentId)
      navigate('/comments')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <h2 style={{ width: '100%', textAlign: 'center' }}>Add Comment</h2>
      <div
        style={{
          width: '200px',
          margin: '10px',
          backgroundColor: 'lightblue',
          borderRadius: '5px',
          padding: '10px',
          boxSizing: 'border-box'
        }}
      >
        <form onSubmit={commentId ? handleCommentUpdate : handleCommentSubmit}>
          <label htmlFor="comment" style={{ display: 'block' }}>
            Comment:
          </label>
          <textarea
            id="content"
            value={comment.content}
            onChange={handleCommentChange}
            style={{ marginBottom: '10px', width: '100%', height: '100px' }}
          />
          <button type="submit">
            {commentId ? 'Update Comment' : 'Submit Comment'}
          </button>
          {commentId && (
            <button
              type="button"
              onClick={handleCommentDelete}
              style={{
                backgroundColor: 'tomato',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                marginBottom: '10px',
                width: '100%'
              }}
            >
              Delete Comment
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default AddComment
