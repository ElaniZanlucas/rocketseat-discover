# Navegando pelos elementos

## parentNode e parentElement
 * Navegar pelos elementos pais


```html
  <body>
    <header>
      <h1>Meu Blog</h1>
    </header>
  </body>

  <script src="./script.js"></script>
```

```js
  const body = document.querySelector('body')

  console.log(body.parentNode)
```

## childNode e children
* Navegar pelos elementos filhos
* childNode (NodeList)
* children (HTMLCollection), não leva em conta espaços vazios

```js
  const el = document.querySelector('body')

  console.log(el.childNode)
```

## firstChild firstElementChild
  * Mesma lógica

## lastChild lastElementChild


## nextSibling nextElementSibling
  * Mesma lógica

## previousSibling previousElementSibling