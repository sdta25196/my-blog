
const express = require('express')
const path = require('path')
const fs = require('fs')
const compression = require("compression")
const app = express()

const rootPath = path.resolve(__dirname, '../build')
app.use(compression())
app.use(express.static(rootPath))
// app.use("/static",express.static(path.join(rootPath, 'static')))
app.get('*', (req, res) => {
  let str = fs.readFileSync(path.resolve(rootPath, "./index.html"), 'utf-8')
  res.send(str)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`listen http://localhost:${port}`)
})
