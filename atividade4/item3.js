//3. Crie um código que vai receber uma lista de números, encontre dentro dessa lista qual o maior valor e o menor valor, escreva esses dois valores na tela.

import PromptSync from "prompt-sync"
import chalk from "chalk"
const prompt = PromptSync()

let lista = []
function receberLista(){
    while(true) {
        lista = prompt("Digite uma lista de valores separados por vírgula: ")
        .split(",") //Separa por vírgula os números digitados => retorno: array
        .map((e) => Number(e)) //Muda o tipo dos itens na lista => retorno: array com tipos modificados
        .filter((e) => !isNaN(e)) //Remove valores inválidos (NaN) => retorno: array sem NaN
        .sort((a,b) => {return a-b}) //Ordena os valores para deixar o menor valor na posição 0 e o maior na última posição. => retorno: array em ordem numérica
        
        if (lista.length < 2) {
            console.log("\nDigite ao menos dois números válidos!")
            continue
        }
        break
    }

    console.log(`\nO ${chalk.red("MENOR")} número é o ${chalk.red(lista[0])} e o ${chalk.blue("MAIOR")} número é ${chalk.blue(lista.at(-1))}.`)
}

receberLista()