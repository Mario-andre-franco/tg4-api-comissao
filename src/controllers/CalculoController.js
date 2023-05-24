const { formataDados } = require('../middleware/FormataDadosParaCalculo')
const calculaComissao = require('../middleware/CalculaComissao')

/*
    - Classe que faz o controller
    - Método handle:
        recebe o request e o response
    - formataDados: recebe o valor para ser formatado
    - calculaComissao.handle: faz o calculo da comissao e retorna o vendedor e sua comissao    
*/


class CalculoController {

    handle(request, response) {
        const bodyData = request.body.pedidos
        const dadosParaCalcularComissao = formataDados(bodyData)
        const retornoComissao = calculaComissao.handle(dadosParaCalcularComissao)

        response.json(retornoComissao)
    }
}

module.exports = new CalculoController() 