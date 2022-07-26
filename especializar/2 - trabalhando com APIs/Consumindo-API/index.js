// Express não faz requisição em api
// É uitlizado para criar a api/rotas
const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/').get((req,res) => {
  axios
   .get('https://api.github.com/users/jakeliny')
   .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
   .catch(error => console.error(error))

})