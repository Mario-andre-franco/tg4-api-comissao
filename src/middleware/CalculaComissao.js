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