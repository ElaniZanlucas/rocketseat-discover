// Utilizar o Insomnia
const express = require('express')

// inicializando o express
const app = express()

// Fica ouvindo o navegador na porta 3000 (server)
app.listen('3000')

// Navegador encontrou uma rota '/'
// Viu que é um GET
// Vai ler a resposta (res)
// Enviando para o navegador como resposta "hello"
// Toda a requisição recebe (req, res)
// app.route('/').get((req, res) => res.send("hello"))
// Outra rota
app.route('/sobre').get((req, res) => res.send("hello sobre"))

// middleware
// Ponte entre as requisições
// Quando mandar algo do Insomnia pra cá, vai passar pelo middleware
// Depois vai executar oq tem que ser executado aqui dentro
// Que transforme tudo em json
app.use(express.json())

// Receber informações
// app.route('/').post((req, res) => console.log(req.body))
// app.route('/').post((req, res) => res.send(req.body))

// Ver oq estava antes do Put
let author = "Ciclano"
app.route('/').get((req, res) => res.send(author))

// PUT Serve para editar informações
app.route('/').put((req, res) => {
  // Recebendo uma informação
  author = req.body.author
  res.send(author)
})

// Recebe um id para apagar alguma informação que esteja no código
// Normalmente recebe o id na route
app.route('/:identificador').delete((req, res) => {
  res.send(req.params.identificador)
})