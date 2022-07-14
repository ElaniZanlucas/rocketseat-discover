// switch

let expression = 'b'

function calculate(numero1, operator, numero2) {
  let result

  switch (operator) {
    case '+':
      result = numero1 + numero2
      break;
  
    case '-':
      result = numero1 - numero2
      break;
    
    case '*':
      result = numero1 * numero2
      break;
  
    case '/':
      result = numero1 / numero2
      break;
  
    default:
      console.log('não há esta operação')
      break;
  }

  return result
}

console.log(calculate(4, '+', 8))