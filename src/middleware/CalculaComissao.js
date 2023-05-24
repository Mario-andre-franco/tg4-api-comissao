const metas = [
    { mes: 1, qtd: 5 },
    { mes: 2, qtd: 3 },
    { mes: 3, qtd: 2 },
    { mes: 4, qtd: 2 },
    { mes: 5, qtd: 5 },
    { mes: 6, qtd: 60 },
    { mes: 8, qtd: 2 },
    { mes: 9, qtd: 4 },
    { mes: 10, qtd: 4 },
    { mes: 11, qtd: 7 },
    { mes: 12, qtd: 2 }
];

/*
    - Classe que faz todo calculo
    - Método handle:
        recebe as informações já formatada,e pra cada objeto no array (caso seja um array > 1, ele faz o de:para e coloca em outro objeto json retornado no final)
    - verificaMetas: recebe o numero de vendas, o mes e as metas
    - calculaComissao.handle: faz o calculo da comissao e retorna apenas o valor da comissao
*/

class CalculaComissao {

    handle(data) {
        const results = {};

        data.forEach((item) => {
            const numeroDeVendas = item.numeroVendas;
            const numeroVendedor = item.numeroVendedor;
            const mes = item.mesVenda;
            const isBateuMeta = this.verificaMetas(numeroDeVendas, mes, metas);
            const valorUnitario = item.valorUnitario;
            const valorTotal = item.valorTotal;
            const comissao = this.calcularComissao(valorTotal, valorUnitario, isBateuMeta);

            //esse if é para verificar se existe dentro da variavel results, algum objeto 'numeroVendedor', se não existir é criado um novo objeto usado como key o [numeroVendedor]

            if (!results[numeroVendedor]) {
                results[numeroVendedor] = {
                    numeroVendedor: numeroVendedor,
                    mes: mes,
                    comissao: comissao
                };
            }
        });

        return Object.values(results);
    }

    verificaMetas(numeroDeVendas, mes, metas) {
        //nesse find é passado o meta.mes (que está definido lá no começo do arquivo) e fazemos a comparaçao se é igual ao mes que vem como parametro e jogamos pra variavel metasDoMes

        const metasDoMes = metas.find(meta => meta.mes === mes)
        if (metasDoMes && numeroDeVendas > metasDoMes.qtd) {
            return true
        }
        else {
            return false
        }
    }
    calcularComissao(valorTotalDoMes, valorUnitarioVendido, isBateuMeta) {
        let comissao = 0
        if (valorTotalDoMes <= 300) {
            comissao = valorTotalDoMes * 0.01
        }
        else if (valorTotalDoMes > 300 && valorTotalDoMes <= 1000) {
            comissao = valorTotalDoMes * 0.03
        }
        else {
            comissao = valorTotalDoMes * 0.05
        }

        if (isBateuMeta) {
            comissao = comissao + (valorUnitarioVendido * 0.03)
        }
        return comissao.toFixed(2)
    }
}


module.exports = new CalculaComissao()