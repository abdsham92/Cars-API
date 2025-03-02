// @desc Retrieve Car Identification
// @route GET /api/carIdentification
// @access Public
const getCarIdentification = (req, res) => {
    res.status(200).json({"Status":"Please wait until we finish the DB connection"})
}

module.exports = {
    getCarIdentification
}