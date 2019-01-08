var mongoose = require('mongoose')

// Create a Mongoose schema
const PunchinSchema = new mongoose.Schema({
  id: String
})

// Register the schema
const PunchinDb = mongoose.model('punchin', PunchinSchema)

class PunchinModel extends PunchinDb {
  constructor (punchin) {
    super({
      id: punchin.id
    })
  }
}

module.exports = PunchinModel
