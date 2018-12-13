const PunchinRequest = require('../../src/punchin/punchin-request')
const PunchinResponse = require('../../src/punchin/punchin-response')
const punchinController = require('../../src/punchin/punchin-controller')
const assert = require('chai').assert

describe('given the puchin controller', () => {
  it('should be return a PunchinResponse', () => {
    const punchinRequest = new PunchinRequest('{"id": "galo"}')
    const punchinResponse = punchinController.get(punchinRequest)

    assert.instanceOf(punchinResponse, PunchinResponse)
  })
})
