//const PunchinRequest = require('../../src/app/punchin/punchin-request')
const assert = require('chai').assert

describe.skip('given new PunchinRequest', () => {
  it('should be return the same id from json', () => {
    const jsonRequest = JSON.parse('{"id":"galo", "hora":"2018-09-26T09:00"}')
    const punchinRequest = new PunchinRequest(jsonRequest)

    assert.equal(punchinRequest.id, 'galo')
  })

  it('should be throw exception when request is null', () => {
    assert.throws(() => new PunchinRequest(), Error, 'invalid json')
  })
})
