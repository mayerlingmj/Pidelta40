const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    content: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: false }
  },
  { timestamps: true }
)

module.exports = commentSchema
