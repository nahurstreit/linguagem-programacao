/*2. Crie uma função que recebe 2 valores: número e o limite, sua função deve criar uma tabuada do número que foi informado e que vai de 1 até limite.
Ex: Número 2, limite 2
1x2 = 2
2x2 = 4
*/

import PromptSync from "prompt-sync"

const prompt = PromptSync()
const nPrompt = (text) => {
    return Number(prompt(text))
}

function tabuada(num, limite) {
    for(let i = 1; i <= limite; i++){
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

tabuada(nPrompt("Digite um número: "), nPrompt("Digite o limite da tabuada: "))