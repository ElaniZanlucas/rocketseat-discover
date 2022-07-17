# Manipaulando conteúdo

## textContent
* Altera o conteúdo de texto do elemento

```js
  const element = document.querySelector('h1')
  element.textContent = "Olá Devs!"
```

## innerText
* Troca o texto interno do elemento HTML

```js
  const element = document.querySelector('h1')
  element.innerText = "Olá Devs!"
```

## innerHTML
* Troca o conteúdo HTML interno

```js
  const element = document.querySelector('h1')
  element.innerHTML = "Olá Devs! <small>!!!</small>"
  // A parte "!!!" fica menor que o resto do texto
```

## value
* Manipular o valor de um input
* Serve tanto para pegar um valor quanto para atribuir um valor

```html
  <body>
    <input type="text" value="estou no elemento">
  </body>
```

```js
  const element = document.querySelector('input')
  element.value = "Valor que eu quiser"
```

# Manipulando elementos

## Atributos

```html
  <body>
    <header class="bg">
      <h1>Meu Blog</h1>
    </header>
  </body>
```

```js
  const header = document.querySelector('header')
  // Adicionando atributo
  header.setAttribute('id', 'header')

  const headerID = document.querySelector('#header')

  // Pegando o atributo
  console.log(headerID.getAttribute('class'))

  // Removendo atributos
  header.removeAttribute('id')
  header.removeAttribute('class')

  header.setAttribute('class', 'bg header')
```
