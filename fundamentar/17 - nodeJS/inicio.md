# Prática
https://nodejs.org/en/docs/

## variáveis globais
* console
* global: mostra as variáveis globais

# Módulos nativos
## require
* forma de chamar módulos já nativos do nodeJS ou
* módulos que podem ser criados ou instalados posteriormente

# Criando módulos
## module

<!-- exports.js -->
```js
  module.exports = "Enviando dados do meu módulo"
```

<!-- require.js -->
```js
  const myModule = require('./exports')

  console.log(myModule)
```

## process

```js
  // Lista de argumentos que está rodando no node
  console.log(process.argv)
```
