import carModels from "../models/carModelsSchema.js"

// @desc Retrieve Car Identification
// @route GET /api/carIdentification
// @access Public
const getCarIdentification = async (req, res) => {
  // define allowed queries
  const allowedQueries = [
    "make",
    "model",
    "registrationMonth",
    "registrationYear",
  ]

  // ?type=query
  const { type } = req.query
  console.log(`A GET request has been made using the query: ${type}`)

  const result = await carModels.findOne()

  if (type && result && allowedQueries.includes(type)) {
    res.status(201).json({
      auto: result,
      message: "Found!",
    })
  } else {
    res.status(400).json({
      status: "400",
      message: "Bad Request!",
    })
  }
}

export default getCarIdentification
