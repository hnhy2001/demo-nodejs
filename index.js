const express = require('express')
const app = express()
const port = 3001

var homeRouter = require("./app/router/user.router")

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended :false}))
app.use(bodyParser.json())

app.use("/user", homeRouter)

app.get('/', (req, res) => res.send("ok"))
app.listen(port, () => console.log("port:3001"))