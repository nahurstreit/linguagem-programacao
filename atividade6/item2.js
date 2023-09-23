/* ENUNCIADO Item 2:
A partir do array [5,12,20,7,9], crie uma variável “primeiro” que recebe a primeira posição do vetor
e outra variável “restante” que recebe todo o restante dos dados.
- Preferencialmente usando os conceitos de Rest/Spread (caso não consiga pode ser utilizando qualquer método
 - só lembrando que deve funcionar para qualquer array de números) 
*/

const array = [5, 12, 20, 7, 9]

function separarArray(arrayEscolhido) {
    return [arrayEscolhido[0], ...arrayEscolhido.slice(1)]
}

const [primeiro, ...restante] = separarArray(array)
console.log(primeiro)
console.log(restante)