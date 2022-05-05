const express = require('express')

const config = require('./config/app')

const app = express()

app.get('/home', (req, res) => {
  return res.send('Home screen')
})

app.get('/login', (req, res) => {
  return res.send('Login screen works now')
})

const port = config.appPort

app.listen(port, () => {
  console.log(`Take me to warp ${port}!`)
})