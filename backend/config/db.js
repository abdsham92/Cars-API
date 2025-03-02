import mongoose from "mongoose"
import dotenv from "dotenv"

// load environment variables
dotenv.config();
const uri = process.env.MONGO_URI

async function connectDB() {
  try {
    // create a connection to the database
    const connection = await mongoose.connect(uri)
    // output when the connection is successful
    console.log("Connecting to MongoDB".cyan)
  } catch (error) {
    // console log on error
    console.log(error)
    // ensure the connection will close when you finish/error
    await mongoose.disconnect()
    process.exit(1)
  }
}
connectDB().catch(console.dir)

export default connectDB
