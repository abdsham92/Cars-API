import mongoose from 'mongoose'

const { Schema } = mongoose;
export const makeModelQuery = "make"

const makeModelSchema = new Schema({
  nextProperty: { type: String, required: true },
  options: [
    {
      label: { type: String, required: true },
      value: { type: String, required: true },
    }
  ]
})

const makeModel = mongoose.model('makeModel', makeModelSchema)

export default makeModel
