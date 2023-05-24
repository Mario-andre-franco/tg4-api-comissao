var express = require("express")
var app = express();
var router = express.Router();

const calculoRoutes = require('./calculo.routes')

router.use('/api', calculoRoutes)

module.exports = router 