import express from "express"
import {
  getCarModels,
  postCarModels,
} from "../controllers/carModelsController.js"

const carModelsRouter = express.Router()

carModelsRouter.route("/api/carModels").get(getCarModels)
carModelsRouter.route("/api/carModels").post(postCarModels)

export default carModelsRouter
