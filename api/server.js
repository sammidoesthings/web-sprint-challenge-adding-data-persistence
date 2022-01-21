// build your server here and require it from index.js

const express = require('express')

//Routers
const ProjectsRouter = require('./project/router')


const server = express()



server.use(express.json())
server.use('/api/projects', ProjectsRouter)


server.use((err, req, res) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server