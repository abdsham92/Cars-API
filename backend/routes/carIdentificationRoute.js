import express from 'express'
import { getCarIdentification, postCarIdentification } from '../controllers/carIdentificationController.js'

const myAppRouter = express.Router()

myAppRouter.route('/api/carIdentification').get(getCarIdentification)
myAppRouter.route('/api/carIdentification').post(postCarIdentification)

export default myAppRouter
