const PunchinResponse = require('../../src/punchin/punchin-response')

const punchinController = {
  // tem que desacoplar do exp;
  post: (req, res) => {
    // const body = req.body
    return res.status(200).send(new PunchinResponse())
  }
}

module.exports = punchinController
