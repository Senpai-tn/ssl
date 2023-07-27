const http = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem'),
}

http
  .createServer(options, (req, res) => {
    res.end('SSL')
  })
  .listen(8520, () => {
    console.log('ssl')
  })
