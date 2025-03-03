import express from "express"
import postCarInfo from "../controllers/carInfoController.js"

const carInfoRouter = express.Router()

carInfoRouter.route("/api/carInfo").post(postCarInfo)

export default carInfoRouter
