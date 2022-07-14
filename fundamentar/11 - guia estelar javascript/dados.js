// Manipulando dados

// Strings e números

  // Transformar string em número e vice-versa
  let string = "123"
  console.log(Number(string))
  let number = 321
  console.log(String(number))

  // Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
  word = "paralalepipedo"
  console.log(word.length)
  number = 1234
  console.log(String(number).length)

  // Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
  number = 2387.3847439280932
  console.log(number.toFixed(2).replace(".", ","))

  // Transforme letras minúsculas em maiúsculas e vice-versa
  word = "Hello World"
  console.log(word.toUpperCase())
  console.log(word.toLowerCase())

  // Verificar se o texto contém a palavra Amor
  let phrase = "Eu quero viver!"
  console.log(phrase.includes("Amor"))

// Strings e Arrays

  // Separe um texto que contêm espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e nde eram espaços, coloque _
  phrase = "Eu quero viver o Amor!"
  myArray = phrase.split(" ")
  console.log(myArray.join("_"))

  // Criar Array com construtor
  myArray = new Array('a', 'b', 'c')
  console.log(myArray)

  // Contar elementos de um array
  console.log([1, 2, 56].length)

  // Transformar uma cadeia de caracteres em elementos de um array
  word = "manipulation"
  console.log(Array.from(word))

// Arrays
  let techs = ["html", "css", "js"]

  // adicionar um item no fim
  techs.push("nodejs")

  // adicionar no começo
  techs.unshift("sql")

  // remover do fim
  techs.pop()

  // remover do começo
  techs.shift()

  // pegar somente alguns elementos do array
  console.log(techs.slice(1, 3))
  console.log(techs.slice(1, 1))

  // remover 1 ou mais itens em qualquer posição do array
  techs.splice(1, 2)

  // encontrar a posição de um elemento no array
  let index = techs.indexOf('css')

  console.log(index)
  console.log(techs)
