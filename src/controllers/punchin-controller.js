const PunchinResponse = require('../responses/punchin-response')
const punchinService = require('../services/punchin-service')

const punchinController = {
  // tem que desacoplar do exp;
  post: (req, res) => {
    // const body = req.body
    try {
      punchinService.addNewPunchin(req.body)
      return res.status(200).send(new PunchinResponse())
    } catch (err) {
      console.log(err)
      return res.status(500).send(err.message)
    }
  }
}

module.exports = punchinController
