const logger = require('../../config/logger')
const PunchinModel = require('../models/punchin-model')

const PunchinDb = {
  save: (punchin) => {
    const punchinModel = new PunchinModel(punchin)
    punchinModel.save()
    logger.debug('save punchin', punchinModel)
  }
}

module.exports = PunchinDb
