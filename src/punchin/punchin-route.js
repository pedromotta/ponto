const PunchinRequest = require('../../src/punchin/punchin-request')
const punchinController = require('../../src/punchin/punchin-controller')
const express = require('express')
const route = express.Router()

route.post('/punchin', (req, res) => {
  try {
    console.log('aaaaa')
    const request = new PunchinRequest(req.body)
    const response = punchinController.post(request)
    return res.status(200).send(response)
  } catch (error) {
    console.log('bbb', error.message)
    return res.status(400).send(error.message)
  }
})

module.exports = route
