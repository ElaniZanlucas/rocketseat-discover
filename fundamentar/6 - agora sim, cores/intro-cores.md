# Cores

Usamos CSS para alternar cores do nosso documento.

## Tipos 

* background-color (para caixas)
* color (para textos)
* border-color (para-caixas)
* outros ...

## Valores

Podemos definir os valores por

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsla, hsla

https://codepen.io/pen/

```css
  element {
    /* Keyword values */
    color: currentcolor;

    /* <named-color> values */
    color: red;
    color: tan;

    /* <hex-color> values 0-F */
    color: #090; /* RED GREEN BLUE */
    color: #009900;
    color: #090a; /* 4° elemento: transparência da cor */
    color: #009900aa;

    /* <rgb()> values 0-255 */
    color: rgb(34, 12, 64, 0.6);
    color: rgba(34, 12, 64, 0.6);
    color: rgb(34 12 64 / 0.6);
    color: rgba(34 12 64 / 0.3);
    color: rgb(34 12 64 / 60%);
    color: rgba(34 12 64 / 30%);

    /* <hsl()> values */
    color: hsl(30, 100%, 50%, 0.6); /* Hue - Saturation - Lumiance (Lightness) */
    color: hsla(30, 100%, 50%, 0.6);
    color: hsl(30 100% 50% / 0.6);
    color: hsla(30 100% 50% / 0.6);
    color: hsl(30 100% 50% / 60%);
    color: hsla(30.2 100% 50% / 60%);

    /* Global values */
    color: inherit; /* Herança */
    color: initial;
    color: unset;
  }
```

## Referência 
https://developer.mozilla.org/pt-BR/docs/Web/CSS/color
