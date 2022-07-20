const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

console.log(pilotos[0])

// Tamanho do array
console.log(pilotos.length)

// iterável
for (const piloto of pilotos) {
  console.log(piloto)
}

// add elemento
pilotos.push('Alonso')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// deletar um elemento na posição 1
pilotos.splice(1, 1)
console.log(pilotos)