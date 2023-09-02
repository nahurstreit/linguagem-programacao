/*4. Crie um código que vai ficar executando pedindo o nome do cliente (enquanto não digitar “” ele segue) e que vai pedir uma lista de hobbies da pessoa (enquanto não digitar “” vai adicionar os hobbies).
No final escreva o nome da pessoa e seu hobbies no seguinte formato: Nome | Hobby 1, Hobby 2, …*/

import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nome = ''
while((nome = prompt("Digite seu nome: ")) == '') {
    console.log("\nNão é possível nome vazio!")
}

let hobbies = [], hobby
while((hobby = prompt("Digite um hobbie: ")) != '') {
    hobbies.push(hobby)
}

console.log(`\n${nome} | ${(() => {
    let finalString = '' //Cria uma string para retornar com os hobbies
    for(let i = 0; i < hobbies.length; i++) {
        finalString += `${i+1}º Hobbie: ${hobbies[i] + (i < hobbies.length - 1 ? ', ' : '')}` //Concatena todos os hobbies e adiciona vírgula até o penúltimo número.
    }
    return finalString
})()}`)