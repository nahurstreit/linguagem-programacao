//1. Crie uma função que vai receber 3 valores e vai devolver qual é o maior desses valores.

import PromptSync from "prompt-sync"
const prompt = PromptSync()

function bigger(num1, num2) {
    return num1 > num2 ? num1 : num2
}

const n = [] //Array para os números
for(let i = 0; i < 3; i++) {
    n.push(Number(prompt(`Digite o ${i+1}º número: `)))
}

console.log(`O maior número dentre os digitados é o número ${bigger(bigger(n[0], n[1]), n[2])}!`)