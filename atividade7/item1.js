/* ENUNCIADO Item 1:
1. Crie quatro funções (somar, subtrair, dividir e multiplicar). 
Em seguida faça uma função chamada calcular(), essa função deve receber 3 parâmetros,
valor A, valor B e a função callback que será executada.
*/

function somar(valorA, valorB) {
    return Number(valorA) + Number(valorB)
}

function subtrair(valorA, valorB) {
    return Number(valorA) - Number(valorB)
}

function dividir(valorA, valorB) {
    return Number(valorA) / Number(valorB)
}

function multiplicar(valorA, valorB) {
    return Number(valorA) * Number(valorB)
}

function calcular(valorA, valorB, funcaoCallBack) {
    return funcaoCallBack(valorA, valorB)
}

console.log(calcular(10,5, somar))
console.log(calcular(10, 5, subtrair))
console.log(calcular(10, 5, dividir))
console.log(calcular(10, 5, multiplicar))