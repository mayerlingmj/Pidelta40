import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { deleteComment } from '../services/commentService'
const CommentDetail = () => {
  const [comment, setComment] = useState(null)
  const { commentId } = useParams()

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(`/comments/${commentId}`)
        setComment(response.data)
      } catch (error) {
        console.error(error)
      }
    }

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

    fetchComment()
  }, [commentId])

  if (!comment) {
    return <div>Loading comment...</div>
  }

  return (
    <div>
      <h2>Comment Details</h2>
      <p>Comment ID: {comment._id}</p>
      <p>Content: {comment.content}</p>
      <p>User: {comment.user.email}</p>
      <p>Posted at: {new Date(comment.createdAt).toLocaleString()}</p>

      {/* Display replies for the comment */}
      {comment.replies.length > 0 && (
        <div>
          <h3>Replies:</h3>
          {comment.replies.map((reply, index) => (
            <div key={index}>
              <p>Reply Content: {reply.content}</p>
              <p>Reply User: {reply.user.email}</p>
              <p>
                Reply Posted at: {new Date(reply.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentDetail
