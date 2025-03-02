import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import myAppRouter from './routes/carIdentificationRoute.js'
import connectDB from './config/db.js'

// load environment variables
dotenv.config();
const port = process.env.PORT

// establish a connection to the DB
connectDB()

const app = express()

app.use(express.json())
app.use(myAppRouter)

app.listen(port, () => console.log(colors.yellow(`Server has started on port ${port}`)))
