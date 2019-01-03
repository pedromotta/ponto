const express = require('express')
const route = express.Router()
const punchinRoute = require('./punchin-route')

route.use((req, res, next) => {
  console.log('oiii')
  next()
})

route.use(punchinRoute)

module.exports = route
