/* ENUNCIADO Item 1:
Considerando a seguinte lista de valores: [10,12,15,35,40] crie funções para devolver os dados conforme solicitado:
 - Uma função que devolve os valores que são maiores que a média
 - Uma função que devolva o menor valor da lista
 - Uma função que devolva o valor da soma dos itens da lista
 - Uma função que devolva todos os valores que são menores que 20
*/

const lista = [10, 12, 15, 35, 40]

function maioresMedia(valores) {
    const media = valores.reduce((somatoria, atual) => somatoria += atual, 0)/valores.length
    return valores.filter(num => num > media)
}
console.log(`Maiores que a média: ${maioresMedia(lista)}`)


function menorLista(valores) {
    return Math.min(...valores)
}
console.log(`Menor da lista: ${menorLista(lista)}`)


function somaLista(valores) {
    return valores.reduce((somatoria, atual) => somatoria += atual, 0)
}
console.log(`Somatoria dos itens da lista: ${somaLista(lista)}`)


function menoresVinte(valores) {
    return valores.filter(num => num < 20)
}
console.log(`Valores menores do que 20: ${menoresVinte(lista)}`)