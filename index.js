const express = require('express')
const app = express()
const routes = require('./src/routes')

app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
