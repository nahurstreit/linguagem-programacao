/* ENUNCIADO Item 2:
Utilizando forEach percorra o seguinte array imprimindo apenas os valores que são maiores que 10:
const arrayPrint = [
      [5,10,12],
      [2,9,11],
      [15,8,6]
]
*/

const arrayPrint = [
    [5,10,12],
    [2,9,11],
    [15,8,6]]

arrayPrint.forEach((line) => {
    line.forEach((element) => {
        if(element > 10) {
            console.log(element)
        }
    })
})