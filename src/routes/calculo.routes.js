var express = require("express")
var app = express();
var router = express.Router();
const calculoController = require('../controllers/CalculoController')
const calculoRoutes = router

/*
    - Criando a rota de post para chamada da api
    - Dentro do calculoController é feita a manipulação dos dados
*/

calculoRoutes.post('/calcula-comissao', (request, response) => {
    return calculoController.handle(request, response)
})

module.exports = calculoRoutes 