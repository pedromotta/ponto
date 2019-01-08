const logger = require('../../config/logger')
const Punchin = require('../domains/punchin')
const punchinDb = require('../adapters/punchin-adapter')

const punchinService = {
  addNewPunchin: (punchinRequest) => {
    const punchin = Punchin.newFromRequest(punchinRequest)
    logger.info(punchin)

    if (punchin.isValid()) {
      punchinDb.save(punchin)
      logger.debug('salvou')
      return true
    }

    throw new Error('Invalid Punchin')
  }
}

module.exports = punchinService
