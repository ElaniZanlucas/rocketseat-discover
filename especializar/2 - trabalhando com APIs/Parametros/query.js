// Query Params

// São identificados na URL atráves da '?'
// Para adicionar mais variáveis, utilizar o '&'

const express = require('express')

const app = express()

app.listen('3000')


// localhost:3000?nome=fulnao
app.route('/').get((req, res) => res.send(req.query.nome))


// localhost:3000/about/user?nome=fulnao
app.route('/about/user').get((req, res) => res.send(req.query))