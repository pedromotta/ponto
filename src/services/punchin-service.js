const Punchin = require('../domains/punchin')
const punchinDb = require('../adapters/punchin-adapter')

const punchinService = {
  addNewPunchin: (punchinRequest) => {
    const punchin = Punchin.newFromRequest(punchinRequest)
    console.log(punchin)

    if (punchin.isValid()) {
      punchinDb.save(punchin)
      console.log('salvou')
      return true
    }

    throw new Error('Invalid Punchin')
  }
}

module.exports = punchinService
