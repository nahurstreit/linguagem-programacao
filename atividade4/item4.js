/*4. Crie um código que vai ficar executando pedindo o nome do cliente (enquanto não digitar “” ele segue) e que vai pedir uma lista de hobbies da pessoa (enquanto não digitar “” vai adicionar os hobbies).
No final escreva o nome da pessoa e seu hobbies no seguinte formato: Nome | Hobby 1, Hobby 2, …*/

import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nome, controlNome, txtNome = "Digite seu nome: "

while((controlNome = prompt(txtNome)) != '') {
    nome = controlNome.toLowerCase()
    nome = nome.charAt(0).toUpperCase() + nome.slice(1) // Transforma a primeira letra em maiuscula
    txtNome = "Tecle Enter para confirmar ou digite novamente seu nome: "
}

console.log() //Dando espaço entre nome e hobbie
let hobby, hobbies = [], txtHobby = "Digite um hobbie: "
while((hobby = prompt(txtHobby)) != '') {
    hobbies.push(hobby)
    txtHobby = "Digite outro hobbie ou tecle Enter para terminar: "
}

console.log(`\n${nome} | ${(() => {
    let finalString = '' //Cria uma string para retornar com os hobbies
    for(let i = 0; i < hobbies.length; i++) {
        finalString += `${i+1}º Hobbie: ${hobbies[i] + (i < hobbies.length - 1 ? ', ' : '')}` //Concatena todos os hobbies e adiciona vírgula até o penúltimo número.
    }
    return finalString
})()}`)