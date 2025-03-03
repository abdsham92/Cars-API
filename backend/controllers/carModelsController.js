import carModels from "../models/carModelsSchema.js"

// @desc Add Car Models
// @route POST /api/carModels
// @access Public
const postCarModels = async (req, res) => {
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

export default postCarModels
