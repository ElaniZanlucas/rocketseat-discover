// Body Params

const express = require('express')

const app = express()

app.listen('3000')

// Sempre que estiver mexendo com corpo de requisição (body),
// é preciso de um middleware
// É oq vai transformar tudo oq está chegando na API em json
app.use(express.json())

app.route('/').post((req, res) => {
  const {nome, cidade} = req.body
  res.send(`${nome}, ${cidade}`)
})