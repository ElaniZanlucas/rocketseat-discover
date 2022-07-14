// for...in
// Cria um loop encima das propriedades de um objeto

let person = {
  name: 'Fulano',
  age: 39,
  weight: 78.5
}

for (const property in person) {
  console.log(property)
  console.log(person[property])
}