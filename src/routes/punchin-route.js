const punchinValidator = require('../validators/punchin-validator')
const punchinController = require('../controllers/punchin-controller')
const express = require('express')
const route = express.Router()

route.post('/punchin', punchinValidator.validate(), punchinController.post)

module.exports = route
