const Validator = require('./request-validator')

const schema = {
  'properties': {
    'id': { 'type': 'string' }
  }
}

class PunchinValidator extends Validator {
  constructor () {
    super(schema)
  }
}

module.exports = new PunchinValidator()
