const { inherits } = require('util')
const { EventEmitter } = require('events-final')

// Trazer as opções que tem no EventEmitter
function Character(name) {
  this.name = name
}

// Herdando para o Character todas as opções do EventEmitter
inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu sou o ${chapolin.name} colorado!`) )

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')