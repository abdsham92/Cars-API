import carInfo from "../models/carInfoSchema.js"
import dotenv from "dotenv"

// load environment variables
dotenv.config()
const protocol = process.env.PROTOCOL
const host = process.env.SERVER_HOST
const port = process.env.PORT

// @desc Retrieve Car Identification
// @route POST /api/carIdentification
// @access Public
const getCarIdentification = async (req, res) => {
  // define allowed queries
  const callRoute = "/api/carModels"
  const callQuery = "make"
  // this should resolve to http://localhost:5000/api/carModels?type=make
  const API_URL = `${protocol}://${host}:${port}${callRoute}?type=${callQuery}`

  let availableModelsResult = await fetch(API_URL)
  availableModelsResult = await availableModelsResult.json()

  const allowedQueries = availableModelsResult.options.map(
    (option) => option.value
  )

  // ?model=query
  const { model } = req.query
  if (!allowedQueries.includes(model)) {
    return res.status(404).json({ message: "Bad request! Model not found!" })
  } else {
    console.log(`A GET request has been made using the query: ${model}`)
  }

  // make a call to the database get the available models of the queried car brand
  const modelResult = await carInfo.findOne({
    nextProperty: "registrationMonth",
    model: [model],
  })
  if (!modelResult) {
    return res.status(404).json({ message: "Bad request! No Model Results!" })
  }

  // make a call to the database get the available manufacturing months of the queried car brand
  const registrationMonthResult = await carInfo.findOne({
    nextProperty: "registrationYear",
    model: [model],
  })
  if (!registrationMonthResult) {
    return res
      .status(404)
      .json({ message: "Bad request! Missing Registration Month!" })
  }

  // make a call to the database get the available manufacturing years of the queried car brand
  //TODO
  const registrationYearResult = await carInfo.findOne({
    nextProperty: null,
    model: [model],
  })
  if (!registrationYearResult) {
    return res
      .status(404)
      .json({ message: "Bad request! Missing registration Year!" })
  }

  if (
    model &&
    modelResult &&
    registrationMonthResult &&
    registrationYearResult &&
    allowedQueries.includes(model)
  ) {
    res
      .status(201)
      .json([modelResult, registrationMonthResult, registrationYearResult])
  } else {
    res.status(400).json({
      status: "400",
      message: "Bad Request!",
    })
  }
}

export default getCarIdentification
