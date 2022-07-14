// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight) 
// undefined

/*
  3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
let name = "Fulano"
let age = 34
let stars = 34.9
let isSubscribed = false

/*
  4. A variável student abaixo é de que tipo de dados?

  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

  4.2 Mostre o console a seguinte mensagem;

    <name> de idade <age> pesa <weight> kg.

    Atenção, subtitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
  name: "Fulano",
  age: 34,
  weight: 34.9,
  isSubscribed: false
};
console.log(typeof student) 

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio  
*/
let students = []

/*
  6. Reatribua o valor para a variável acima, colocando dentro dela o objeto studetn da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students = [student]
console.log(students)

/*
  7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array students
*/
const ciclano = {
  name: "Ciclano",
  age: 29,
  weight: 50.8,
  isSubscribed: true
}

student[1] = ciclano
console.log(students)

/*
  9. Sem rodar o código, responda: qual é a resposta do código abaixo e pq? Após a sua resposta, rode o código e veja se você acertou

    console.log(a)

    var a = 1

    undefined, por conta do hoisting
*/