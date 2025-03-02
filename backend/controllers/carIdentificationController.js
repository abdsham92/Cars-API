import makeModel, { makeModelQuery } from "../models/makeModel.js"

// @desc Retrieve Car Identification
// @route GET /api/carIdentification
// @access Public
export const getCarIdentification = async (req, res) => {
  // ?type=query (make, model, etc..)
  const { type } = req.query
  console.log(`A GET request has been made using the query: ${type}`)
  
  const result = await makeModel.findOne()
  console.log(`The imported query is ${makeModelQuery}`)
  if (type && result && type === makeModelQuery) {  
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
  const { nextProperty, options } = req.body;
  console.log(nextProperty, options)

  if (nextProperty && options.length > 0) {
    await makeModel.create({
      nextProperty,
      options,
    })
    res.status(200).json({
      Status: "Valid Request!",
      nextProperty,
      options,
    })
  } else {
    res.status(400).json({
      status: "400",
      message: "Bad Request",
    })
  }
}
