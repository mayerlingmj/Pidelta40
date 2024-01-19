const mongoose = require('mongoose')

const userSchema = require('./User')
const commentSchema = require('./Comment')

const User = mongoose.model('User', userSchema)
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
  User,
  Comment
}
