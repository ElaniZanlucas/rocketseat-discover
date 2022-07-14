# Variáveis
* 3 palavras reservadas para criar uma variável
  * var: é global e poderá funcionar fora de um escopo de bloco
  * let:
  * const:

## var
 ```js
    // Hoisting: elevação
    console.log('existe x antes do bloco? ', x)
    // undefined
  
    {
      var x = 0
    }

    console.log('existe x depois do bloco? ', x)
    // x = 0
 ```

## const e let: são locais e só funcionam no escopo onde foi criada
 ```js
    // Hoisting: elevação
    console.log('existe x antes do bloco? ', x)
    // Erro de referência

    console.log('existe y antes do bloco? ', y)
  
    {
      console.log('existe x antes do bloco? ', x)
      // não acessa x antes da inicialização
      let x = 4

      console.log('existe y antes do bloco? ', y)
      const y = 2
    }

    console.log('existe x depois do bloco? ', x)
    // Erro de referência

    console.log('existe y antes do bloco? ', y)
 ```