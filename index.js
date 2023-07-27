const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()
const server = https.createServer(
  {
    key: fs.readFileSync('cert/key.pem'),
    cert: fs.readFileSync('cert/cert.pem'),
  },
  app
)

app.get('/', (req, res) => {
  res.send('Secure Server HTTPS')
})
app.get('/a', (req, res) => {
  res.send('a')
})
server.listen(8520, () => {
  console.log('SSL')
})
