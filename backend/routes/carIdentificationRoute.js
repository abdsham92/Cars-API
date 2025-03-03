import express from "express"
import getCarIdentification from "../controllers/carIdentificationController.js"

const carIdentificationRouter = express.Router()

carIdentificationRouter
  .route("/api/carIdentification")
  .get(getCarIdentification)

export default carIdentificationRouter
