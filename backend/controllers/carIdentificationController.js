import carModels, { carModelsQuery } from "../models/carModelsSchema.js"

// @desc Retrieve Car Identification
// @route GET /api/carIdentification
// @access Public
export const getCarIdentification = async (req, res) => {
  // ?type=query
  const { type } = req.query
  console.log(`A GET request has been made using the query: ${type}`)

  const result = await carModels.findOne()

  if (type && result && type === carModelsQuery) {
    res.status(201).json({
      auto: result,
      message: "Found!",
    })
  } else {
    res.status(400).json({
      status: "400",
      message: "Bad Request",
    })
  }
}

// @desc Add Car Identification
// @route POST /api/carIdentification
// @access Public
export const postCarIdentification = async (req, res) => {
  try {
    const { _id, nextProperty, options } = req.body
    if (!nextProperty || !options.length) {
      return res.status(400).json({
        status: "400",
        message: "Bad Request",
      })
    }
    if (nextProperty && options.length > 0) {
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
      message: "Internal Server Error",
      error: error.message,
    })
  }
}
