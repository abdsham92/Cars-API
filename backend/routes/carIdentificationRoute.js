const express = require('express')
const router = express.Router()

const {getCarIdentification} = require('../controllers/carIdentificationController')

router.route('/api/carIdentification').get(getCarIdentification)

module.exports = router
