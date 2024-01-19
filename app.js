const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')

const userRouter = require('./routes/userRouter')
const commentRouter = require('./routes/commentRouter')

const app = express()
const PORT = process.env.PORT || 7002
const db = require('./db')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', userRouter)
app.use('/comments', commentRouter)

app.use('/', (req, res) => {
  res.send('Connected!')
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
