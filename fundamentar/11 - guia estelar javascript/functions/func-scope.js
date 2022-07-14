// function scope
let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject)
// create video

console.log(createThink(subject))
// study