// clearTimeout cancelar um TimeOut

// setTimeout roda uma função depous de X milissegundos
const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)