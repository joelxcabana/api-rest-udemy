require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

const dataBaseConnect = require('./config/mongo')

app.use(cors())
const port = process.env.PORT || 3000
app.listen(port,()=> {
    console.log(`listen on por ${port}`)
})

dataBaseConnect()
