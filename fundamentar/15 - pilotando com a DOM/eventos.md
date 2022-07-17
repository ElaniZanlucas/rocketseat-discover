# Eventos

## Adicionando eventos via HTML
```html
  <body>
    <header>
      <!-- Eu clicar, ele vai executar uma função do javascript -->
      <h1 onclick="print()">Meu Blog</h1>
    </header>
  </body>
  
  <script src="./script.js"></script>
```

```js
  function print() {
    console.log("print")
  }
```

## Eventos de teclado
```js
  const input = document.querySelector('input')

  input.onkeydown = function() {
    console.log('rodei')
  }
```

## Adicionando eventos via JS (maneira recomendada)
```js
  const h1 = document.querySelector('h1')

  // (tipoDeEvento, function)
  h1.addEventListener('click', print)

  function print() {
    console.log('print')
  }
```

## Adicionando eventos via JS (outro método)
```js
  const h1 = document.querySelector('h1')

  h1.onclick = print

  function print() {
    console.log('print')
  }
  
  // Considera a última encontrada
  h1.onclick = function() {
    console.log('outro momento')
  }
```

## Argumento event
```js
  const input = document.querySelector('input')

 input.onkeypress = function(event) {
  // currentTarget = quem dispara o evento
    console.log(event.currentTarget)
 }
```