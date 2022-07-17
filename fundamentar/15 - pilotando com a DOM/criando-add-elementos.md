# Criando e adicionando elementos

## append e prepend

```html
  <body>
    <header>
      <h1>Meu Blog</h1>
    </header>
  </body>

  <script src="./script.js"></script>
```

```js
  // createElement
  const div = document.createElement('div')
  div.innerText = "Olá Devs!"

  // append prepend
  const body = document.querySelector('body')
  
  // add depois
  body.append(div)
  
  // add antes
  body.prepend(div)
```

## insertBefore

```js
  // createElement
  const div = document.createElement('div')
  div.innerText = "Olá Devs!"

  // insertBefore
  // adicionar um script no meio
  const body = document.querySelector('body')
  const script = body.querySelector('script')

  body.insertBefore(div, script)

  // inserir após
  const header = body.querySelector('header')
  body.insertBefore(div, header.nextElementSibling)
```