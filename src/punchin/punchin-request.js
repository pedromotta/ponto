const punchinSchema = require('./punchin-schema')
const Validator = require('../request-validator')

class PunchinRequest extends Validator {
  constructor () {
    super(punchinSchema)
  }
}

module.exports = new PunchinRequest()
