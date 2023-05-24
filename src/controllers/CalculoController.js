const { formataDados } = require('../middleware/FormataDadosParaCalculo')
const calculaComissao = require('../middleware/CalculaComissao')
class CalculoController {

    handle(request, response) {
        const bodyData = request.body.pedidos
        const dadosParaCalcularComissao = formataDados(bodyData)
        const retornoComissao = calculaComissao.handle(dadosParaCalcularComissao)

        response.json(retornoComissao)
    }
}

module.exports = new CalculoController() 