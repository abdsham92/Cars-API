import carInfo from "../models/carInfoSchema.js"

// @desc Add Car Models
// @route POST /api/carInfo
// @access Public
const postCarInfo = async (req, res) => {
  try {
    const { _id, model, nextProperty, options } = req.body
    if (!_id || !model || !nextProperty || !options.length) {
      return res.status(400).json({
        status: "400",
        message: "Bad Request!",
      })
    } else {
      await carInfo.create({ _id, model, nextProperty, options })
      res.status(200).json({
        Status: "Valid Request!",
        _id,
        model,
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

export default postCarInfo
