const logger = require('../../config/logger')
const express = require('express')
const route = express.Router()
const punchinRoute = require('./punchin-route')

route.use((req, res, next) => {
  logger.debug('oiii')
  next()
})

route.use(punchinRoute)

module.exports = route
