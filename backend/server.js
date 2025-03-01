const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.use('/api/carIdentification', require('./routes/carIdentificationRoute'))

app.listen(port, () => console.log(`My Server has started port ${port}`))
