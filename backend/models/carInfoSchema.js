import myMongoose from "mongoose"

const Schema = myMongoose.Schema

const carInfoSchema = new Schema(
  {
    _id: { type: String, required: true }, // allows using a custom document ID
    nextProperty: { type: String, required: false, default: null },
    model: { type: String, required: true },
    options: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
        _id: false, // Disables `_id` for sub-documents in `options` array
      },
    ],
  },
  { versionKey: false } // Disables the `__v` field
)

const carInfo = myMongoose.model("car info", carInfoSchema)

export default carInfo
