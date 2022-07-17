# Manipulando estilos e classes

## style

```html
  <body>
    <header>
      <h1>Meu Blog</h1>
    </header>
  </body>

  <script src="./script.js"></script>
```

```js
  const element = document.querySelector('body')
  
  element.style.backgroundColor = "#f9f3d2"

  console.log(element.style.backgroundColor)
```

## classList

```html
  <body>
    <header>
      <h1>Meu Blog</h1>
    </header>
  </body>

  <script src="./script.js"></script>
```

```css
  .active {
    color: red;
  }

  .green {
    background-color: green;
  }
```

```js
  const element = document.querySelector('body')
  
  element.classList.add('active')

  console.log(element.classList)

  element.classList.remove('active')

  // Se a classe existir, tira
  // Se a classe não existir, adiciona
  // Interruptor ON OFF
  element.classList.toggle('active')
```