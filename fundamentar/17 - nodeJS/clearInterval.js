// clearInterval irá cancelar um srtInterval registrado
const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

// Depois de um certo tempo, cancela o intervalo
setTimeout( () => clearInterval(interval), 4000)