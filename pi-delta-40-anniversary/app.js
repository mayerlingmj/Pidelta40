const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')

const authRouter = require('./routes/authRouter')
const commentRouter = require('./routes/commentRouter')
const conversationRouter = require('./routes/conversationRouter')
const userRouter = require('./routes/userRouter')
const hotelRouter = require('./routes/hotelRouter')
const aboutRouter = require('./routes/aboutRouter')
const lineageRouter = require('./routes/lineageRouter')

const PORT = process.env.PORT || 7000
const db = require('./db') // Include your database configuration file here
const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Connect to your MongoDB database (db.js should contain your database connection code)
db.connect()

// Define routes for different sections
app.use('/api/auth', authRouter)
app.use('/api/comments', commentRouter)
app.use('/api/conversations', conversationRouter)
app.use('/api/users', userRouter)
app.use('/api/hotel', hotelRouter)
app.use('/api/about', aboutRouter)
app.use('/api/lineage', lineageRouter)

app.use('/', (req, res) => {
  res.send('Welcome to the Pi Delta 40th Anniversary Website!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} . . .`)
})
