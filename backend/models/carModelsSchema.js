import myMongoose from "mongoose"

const Schema = myMongoose.Schema

const carModelsSchema = new Schema(
  {
    _id: { type: String, required: true }, // allows using a custom document ID
    nextProperty: { type: String, required: false, default: null },
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

const carModels = myMongoose.model("car model", carModelsSchema)

export default carModels
