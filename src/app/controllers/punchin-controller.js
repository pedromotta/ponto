const logger = require('../../config/logger')
const PunchinResponse = require('../responses/punchin-response')
const punchinService = require('../services/punchin-service')

const punchinController = {
  // tem que desacoplar do exp;
  post: (req, res) => {
    try {
      punchinService.addNewPunchin(req.body)
      logger.info('olarrrr')
      return res.status(200).send(new PunchinResponse())
    } catch (err) {
      logger.error(err.message, err)
      return res.status(500).send(err.message)
    }
  }
}

module.exports = punchinController
