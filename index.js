var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var cors = require("cors")
var router = require('./src/routes/routes')

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/", router);

app.listen(3333, () => console.log('Server is running'))

