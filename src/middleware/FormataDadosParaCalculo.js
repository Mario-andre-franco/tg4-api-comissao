
/*
    - Classe que faz a manipulação para devolver um json mais simples
    - A variavel resultado retorna um json do tipo: 
        {
            "numeroVendedor" : "1",
            "numeroVendas" : 2,
            "mesVenda" : 3,
            "valorUnitario": 100,
            "valorTotal" : 300
        }
*/

class FormataDados {

    formataDados(data) {
        const vendasPorVendedor = {}
        for (const pedido of data) {
            const vendedor = pedido.vendedor;
            const data = pedido.data;
            const mes = parseInt(data.split("-")[1])
            const valor = pedido.valor;
            const valorUnitario = valor;

            if (vendasPorVendedor[vendedor]) {
                vendasPorVendedor[vendedor].valorTotal += valor;
                vendasPorVendedor[vendedor].numeroVendas++;
            } else {
                vendasPorVendedor[vendedor] = {
                    numeroVendedor: vendedor,
                    numeroVendas: 1,
                    mesVenda: mes,
                    valorUnitario: valorUnitario,
                    valorTotal: valor
                };
            }
        }
        const resultado = Object.values(vendasPorVendedor) || {};
        return resultado
    }
}

module.exports = new FormataDados() 