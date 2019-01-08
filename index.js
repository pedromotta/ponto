const express = require('express')
const app = express()
const logger = require('./src/config/logger')
const routes = require('./src/app/routes')

app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3000
app.listen(port, () => logger.info(`Listening on port ${port}`))
