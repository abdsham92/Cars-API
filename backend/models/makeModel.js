import myMongoose from 'mongoose'

const Schema = myMongoose.Schema
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

const makeModel = myMongoose.model('makeModel', makeModelSchema)

export default makeModel
