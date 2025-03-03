import express from "express"
import postCarModels from "../controllers/carModelsController.js"

const carModelsRouter = express.Router()

carModelsRouter.route("/api/carModels").post(postCarModels)

export default carModelsRouter
