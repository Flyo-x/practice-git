const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    console.log('test')
    console.log('test')
    console.log('test')
})

server.listen(3000, () => {
    console.log('listening on 3000 port')
})