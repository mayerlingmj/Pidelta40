// src/services/commentService.js
import api from './api'

export const createComment = async (data) => {
  try {
    const response = await api.post('/comments', data)
    return response.data
  } catch (error) {
    console.error('Error creating comment:', error.response.data)
    throw error
  }
}

export const getComments = async () => {
  try {
    const response = await api.get('/comments')
    return response.data
  } catch (error) {
    console.error('Error fetching comments:', error)
    throw error
  }
}

export const updateComment = async (commentId, data) => {
  try {
    const response = await api.put(`/comments/${commentId}`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteComment = async (commentId) => {
  try {
    await api.delete(`/comments/${commentId}`)
  } catch (error) {
    throw error
  }
}
