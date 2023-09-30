/* ENUNCIADO Item 2: (Execute index.js)
2. Crie uma classe Cliente, essa classe deve ter nome, telefone, renda e e-mail como atributos
 e um método verificarCredito(), esse método deve retornar uma promise que retorna: 
 Crédito aprovado (renda > 2000) ou Crédito recusado (renda < 2000)
*/

export default class Cliente {
    constructor(nome, telefone, renda, email) {
        this.nome = nome
        this.telefone = telefone
        this.renda = Number(renda).toFixed(2)
        this.email = email
    }

    async verificarCredito() {
        return await new Promise((resolve, reject) => {
            if(this.renda > 2000) resolve("Crédito aprovado.")
            else reject("Crédito recusado.")
        })
        .then((response) => {
            console.log(`Cliente ${this.nome}: ${response}`)
            return true
        })
        .catch((response) => {
            console.log(`Cliente ${this.nome}: ${response}`)
            return false
        })
    }
}