
# API NODE.JS TG4

## Prova Backend Jr
Desenvolva uma API REST que tenha um método para cálculo de comissao de
vendas, descrito abaixo. É necessário apenas um método post, mas a logica pode se
estruturada da melhor forma possível e em quantas funções achar necessário.

## Tecnologias aceitas:

NodeJS + Express

Python + FastApi

Csharp + Aspnet Core

Não há a necessidade de banco de dados, todos dados podem ser mocados em
memória.

## Tecnologias utilizadas:

NodeJS + Express
## Descrição da API


1 - A API precisa calcular a comissao que um vendedor deve receber, segundo a
seguinte regra:
- 1% para vendas acima até 300 reais
- 3% para vendas entre 300 e 1000 reais
- 5% para vendas acima de 1000 reais
- O vendedor receberá um adicional por atingimento de META. Se tiver atingido a meta do mês o vendedor ganha mais 3%. As metas são referentes a quantidade de vendas e estão abaixo:

```
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
```




## Retorno esperado

```
Teste 1 - Vendedor deve receber bonus se atingir a meta
ENTRADA: {
    "pedidos": [
        { "vendedor": 1, "data": "2022-03-01", "valor"=100,00 },
        { "vendedor": 1, "data": "2022-03-01", "valor"=100,00 },
        { "vendedor": 1, "data": "2022-03-01", "valor"=100,00 },
    ]}
SAIDA: {
    "comissoes": [
        {"vendedor": 1, "mes":3, valor: "6,00"},
    ]}

```
```
Teste 2 - Vendedor deve não receber bonus se atingir a meta
ENTRADA: {
    "pedidos": [
        { "vendedor": 1, "data": "2022-03-01", "valor"=100,00 }
    ]}
SAIDA: {
    "comissoes": [
        {"vendedor": 1, "mes":3, valor: "1,00"},
]}

```

```
Teste 3 - Vendedor deve receber comissao segundo a faixa
ENTRADA: {
    "pedidos": [
        { "vendedor": 1, "data": "2022-03-01", "valor"=1000,00 },
    ]}
SAIDA: {
    "comissoes": [
        {"vendedor": 1, "mes":3, valor: "30,00"},
    ]}
```

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Mario-andre-franco/tg4-api-comissao
```

Entre no diretório do projeto

```bash
  cd tg4-api-comissao
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

