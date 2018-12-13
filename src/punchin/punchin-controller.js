const PunchinResponse = require('../../src/punchin/punchin-response')

const punchinController = {
  post: function (request) {
    console.log(request)
    return new PunchinResponse()
  }
}

module.exports = punchinController
