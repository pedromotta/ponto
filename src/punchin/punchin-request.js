class PunchinRequest {
  constructor (requestJson) {
    console.log('json', requestJson)
    if (!requestJson || !requestJson.id) {
      throw new Error('invalid json')
    }

    this.id = requestJson.id
  }
}

module.exports = PunchinRequest
