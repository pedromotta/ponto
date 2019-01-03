const PunchinModel = require('../models/punchin-model')

const PunchinDb = {
  save: (punchin) => {
    const punchinModel = new PunchinModel(punchin)
    punchinModel.save()
    console.log('save punchin', punchinModel)
  }
}

module.exports = PunchinDb
