const express = require('express')
const routes = require('./config/routes')

const app = express()

app.use(express.json())
app.use(routes)


var server = app.listen(8080, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Express started at http://%s:%s`,host, port)
})

