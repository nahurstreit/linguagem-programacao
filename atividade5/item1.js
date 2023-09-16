/* ENUNCIADO Item 1:
Crie uma função chamada calcularPrecoComDesconto, essa função vai receber 3 parâmetros -
(valor do produto, quantidade e uma função callback que aplica o desconto e devolve o valor atualizado)
*/

function calcularPrecoComDesconto(valor, qtdProd, callback) {
    return callback(Number(valor) * Number(qtdProd))
}

function desconto(valorTotal, perDesconto) {
    return (Number(valorTotal) * (1 - (Number(perDesconto)/100))).toFixed(2)
}

console.log(calcularPrecoComDesconto(10, 10, (res) => desconto(res, 10)))
console.log(calcularPrecoComDesconto(49.9, 5, (res) => desconto(res, 17)))