var express = require("express")
var app = express();
var router = express.Router();
const calculoController = require('../controllers/CalculoController')

const calculoRoutes = router

calculoRoutes.post('/calcula-comissao', (request, response) => {
    return calculoController.handle(request, response)
})

module.exports = calculoRoutes 