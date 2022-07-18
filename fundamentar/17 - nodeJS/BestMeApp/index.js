// Saída padrão do processo
// process.stdout.write()

const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E que eu poderia fazer para melhorar?",  
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
// Algo que ouve eventos
// Assincronismo
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit()
  }
})

// Callback function
process.on('exit', () => {
  console.log(`
    Hello Fulano:

    Oq vc aprendeu hj foi:
    ${answers[0]}

    Oq te aborreceu e você poderia melhorar foi:
    ${answers[1]}

    Oq te deixou feliz hj foi:
    ${answers[2]}

    Vc ajudou ${answers[3]} pessoa hj!!

    Volte amanhã para mais reflexões :)
  `)
})
