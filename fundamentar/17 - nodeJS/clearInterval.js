// clearInterval irá cancelar um srtInterval registrado
const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)
clearInterval(interval)