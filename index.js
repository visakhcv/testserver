require('dotenv').config()
const express= require('express')
const cors= require('cors')
const bodyParser = require('body-parser');
const router = require('./router/router')
require('./database/connection')

const server=express()



const port=9000 || process.env.PORT
server.use(cors())
server.use(bodyParser.json({ limit: 10 * 1024 * 1024 }))
server.use(bodyParser.urlencoded({ limit: 10 * 1024 * 1024 }))

server.use(router)

server.listen(port, ()=> console.log(`Listening on http://localhost:${port}`))