// Route Params

const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get((req, res) => res.send("oi"))

app.route('/:variavel').get((req, res) => res.send(req.params.variavel))

// Sempre que colocar um outro '/', ele vai entender como outra rota
// Só vai ser chamada quando depois do '/' estiver o parâmetro 'identidade'
// E tudo depois da segunda '/' vira uma variável
app.route('identidade/:nome').get((req, res) => res.send(req.params.nome))

