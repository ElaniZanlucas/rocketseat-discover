// Promise
/*
  A promessa de que algo irá acontecer
  Poderá dae certo ou errado,
  mas irá acontecer
 */

  let aceitar = true

  console.log('pedir uber')
  // callback arrow function
  const promessa = new Promise ((resolve, reject) => {

    return aceitar ? resolve('carro chegou') : reject('pedido negado')
  })

  
  // arrow function
  promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('finalizada'))

  // Ver o assincronismo
  console.log('aguardando...')