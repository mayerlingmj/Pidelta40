import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  getComments,
  deleteComment,
  updateComment
} from '../services/commentService'

const CommentList = ({ user }) => {
  const [comments, setComments] = useState([])
  const [editInputs, setEditInputs] = useState({})

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments()

        if (response && response.comments) {
          setComments(response.comments)
        } else {
          console.log(
            'Invalid response format or no comments available:',
            response
          )
          setComments([])
        }
      } catch (error) {
        console.error('Error fetching comments:', error)
        setComments([])
      }
    }

    fetchComments()
  }, [])

  useEffect(() => {
    const newEditInputs =
      comments.reduce((inputs, comment) => {
        inputs[comment._id] = comment.content
        return inputs
      }, {}) || {}
    setEditInputs(newEditInputs)
  }, [comments])

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(commentId)
      const updatedComments = comments.filter(
        (comment) => comment._id !== commentId
      )
      setComments(updatedComments)
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (commentId, newValue) => {
    setEditInputs({
      ...editInputs,
      [commentId]: newValue
    })
  }

  const handleUpdateComment = async (commentId) => {
    try {
      await updateComment(commentId, { content: editInputs[commentId] })
      const updatedComments = comments.map((comment) =>
        comment._id === commentId
          ? { ...comment, content: editInputs[commentId] }
          : comment
      )
      setComments(updatedComments)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundImage: `url('https://i.imgur.com/XorUljT.png')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100vh'
      }}
    >
      <h2 style={{ width: '100%', textAlign: 'center' }}>Comment List</h2>
      {Array.isArray(comments) && comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment._id}
            style={{
              width: '200px',
              margin: '10px',
              backgroundColor: 'crimson',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '500px',
              boxSizing: 'border-box'
            }}
          >
            {comment && (
              <>
                <div style={{ marginBottom: '10px' }}>
                  <textarea
                    value={editInputs[comment._id] || ''}
                    onChange={(e) =>
                      handleInputChange(comment._id, e.target.value)
                    }
                    style={{
                      marginBottom: '10px',
                      width: '100%',
                      resize: 'vertical'
                    }}
                  />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <button
                      style={{
                        backgroundColor: 'white',
                        color: 'black',
                        border: 'none',
                        borderRadius: '5px',
                        marginBottom: '10px',
                        width: '48%'
                      }}
                      onClick={() => handleUpdateComment(comment._id)}
                    >
                      Update
                    </button>
                    <button
                      style={{
                        backgroundColor: 'white',
                        color: 'black',
                        border: 'none',
                        borderRadius: '5px',
                        marginBottom: '10px',
                        width: '48%'
                      }}
                      onClick={() => handleDeleteComment(comment._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <Link
                  to={`/comments/${comment._id}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  {comment.content}
                </Link>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No comments available or invalid response format.</p>
      )}
    </div>
  )
}

export default CommentList
