// setTimeout roda uma função depous de X milissegundos
const timeOut = 3000
const finished = () => console.log('done!')

// Callback: depois de 3 seg, a função finished vai ser executada
setTimeout(finished, timeOut)
// Assincronismo
console.log('Mostrar')

// Ordem: printa o 'Mostrar' e depois o 'done!'