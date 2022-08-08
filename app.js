require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

const dataBaseConnect = require('./config/mongo')
app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

const port = process.env.PORT || 3000

// rutas
app.use('/api/',require('./routes'))

app.listen(port,()=> {
    console.log(`listen on por ${port}`)
})

dataBaseConnect()
