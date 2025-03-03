import express from "express"
import dotenv from "dotenv"
import colors from "colors"

import connectDB from "./config/db.js"

import carIdentificationRouter from "./routes/carIdentificationRoute.js"
import carModelsRouter from "./routes/carModelsRoute.js"
import carInfoRouter from "./routes/carInfoRoute.js"

// load environment variables
dotenv.config()
const port = process.env.PORT

// initialize my expressJS/NodeJS API application
const app = express()

// allow the server to accept raw JSON requests
app.use(express.json())

// recognized routes by the API
app.use(carIdentificationRouter)
app.use(carModelsRouter)
app.use(carInfoRouter)

// establish a connection to the DB
connectDB()

// start the listening process on the defined port
app.listen(port, () =>
  console.log(colors.yellow(`Server has started on port ${port}`))
)
