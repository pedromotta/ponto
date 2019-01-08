const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true })

class Validator {
  constructor (schema) {
    this.schema = schema
  }

  validate () {
    return (req, res, next) => {
      const validate = ajv.compile(this.schema)
      const bodyIsValid = validate(req.body)
      if (!bodyIsValid) {
        return res.status(400).send(ajv.errorsText(validate.errors))
      }
      next()
    }
  }
}

module.exports = Validator
