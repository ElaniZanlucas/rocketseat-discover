const {EventEmitter} = require('events')

const ev = new EventEmitter()

// Escutar o evento
ev.on('saySomething', (message) => {
  console.log('Eu ouvi você:', message)
})

// Escutar uma única vez
ev.once('saySomething', (message) => {
  console.log('Eu ouvi você:', message)
})

// Disparar eventos
ev.emit('saySomething', "Fulano")
ev.emit('saySomething', "Fulano2")
ev.emit('saySomething', "Fulano3")
ev.emit('saySomething', "Fulano4")


