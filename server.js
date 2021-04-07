const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 6000
const usersRouter = require('./routes/usersRouter')
const articlesRouter = require('./routes/articlesRouter')
require('dotenv').config()

app.listen(PORT, () => console.log(`listening at localhost:${PORT}`))

mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  )
  .then(() => console.log("Connect to central db successfully"))
  .catch((err) => console.log("[ERROR] DB connection failed"));

app.use(express.json())

app.use('/users', usersRouter)
app.use('/articles', articlesRouter)

app.use((err,req,res,next) => {
    res.status(err.status || 500).send({
        error: {
            message: err.message
        }
    })
})