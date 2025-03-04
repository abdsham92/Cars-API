import carModels from "../models/carModelsSchema.js"

// @desc Retrieve Car Models
// @route GET /api/carModels
// @access Public
export const getCarModels = async (req, res) => {
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
    res.status(201).json(result)
  } else {
    res.status(400).json({
      status: "400",
      message: "Bad Request!",
    })
  }
}

// @desc Add Car Models
// @route POST /api/carModels
// @access Public
export const postCarModels = async (req, res) => {
  try {
    const { _id, nextProperty, options } = req.body
    if (!_id || !nextProperty || !options.length) {
      return res.status(400).json({
        status: "400",
        message: "Bad Request",
      })
    } else {
      await carModels.create({ _id, nextProperty, options })
      res.status(200).json({
        Status: "Valid Request!",
        _id,
        nextProperty,
        options,
      })
    }
  } catch (error) {
    if (error.message.includes("duplicate key error")) {
      return res.status(409).json({
        status: "409",
        message:
          "Duplicate entry. This record already exists. Change _id to add a new record",
      })
    }
    res.status(500).json({
      status: "500",
      message: "Internal Server Error!",
      error: error.message,
    })
  }
}
