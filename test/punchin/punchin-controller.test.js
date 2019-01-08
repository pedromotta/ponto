//const PunchinRequest = require('../../src/app/punchin/punchin-request-validator')
//const PunchinResponse = require('../../src/app/punchin/punchin-response')
//const punchinController = require('../../src/app/punchin/punchin-controller')
const assert = require('chai').assert

describe.skip('given the puchin controller', () => {
  it('should be return a PunchinResponse', () => {
    const punchinRequest = new PunchinRequest({"id": "galo"})
    const punchinResponse = punchinController.post(punchinRequest)

    assert.instanceOf(punchinResponse, PunchinResponse)
  })
})
