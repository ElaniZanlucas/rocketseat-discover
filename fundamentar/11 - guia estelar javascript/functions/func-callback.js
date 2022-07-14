// callback fucntion

function sayMyName(name) {
  console.log('antes da callback')
  name()
  console.log('depois da callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)