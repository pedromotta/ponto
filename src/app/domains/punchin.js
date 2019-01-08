class Punchin {
  constructor (id) {
    this.id = id
  }

  isValid () {
    return false
  }
}

const PunchinCreator = {
  newFromRequest: (request) => {
    return new Punchin(request.id)
  }
}

module.exports = PunchinCreator
