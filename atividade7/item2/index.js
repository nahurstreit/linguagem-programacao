/* ENUNCIADO Item 2: (Execute index.js)
2. Crie uma classe Cliente, essa classe deve ter nome, telefone, renda e e-mail como atributos
 e um método verificarCredito(), esse método deve retornar uma promise que retorna: 
 Crédito aprovado (renda > 2000) ou Crédito recusado (renda < 2000)
*/

import Cliente from "./Cliente.js"

const cliente1 = new Cliente("Gabriela", "56789", 3000, "gabriela@mail.com")
const cliente2 = new Cliente("Nahur", "12345", 1500, "nahur@mail.com")

cliente1.verificarCredito()
cliente2.verificarCredito()