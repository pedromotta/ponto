const PunchinRequest = require('./punchin-request')
const punchinController = require('../../src/punchin/punchin-controller')
const express = require('express')
const route = express.Router()

route.post('/punchin', PunchinRequest.validate(), punchinController.post)

module.exports = route
