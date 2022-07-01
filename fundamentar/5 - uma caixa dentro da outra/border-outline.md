## border (e outline)

As bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`
  - style: soli | dotted | dashed | double | groove | ridge | inset | outset
  - width: `<lenght>`
  - color: `<color>`

```css
  div {
    /* shorhand */

    /* top | right | bottom | left */
    border-top: solid 2px; 

    /* style */
    border: solid;

    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border outset #f33;

    /* width | style | color */
    border: medium dashes green
  }

```

https://developer.mozilla.org/en-US/docs/Web/CSS/border

### outline

- difere em 4 sentidos:
  - Não modifica o tamanho da caixa, pois não é parte do Box Model
  - Poderá ser diferente de retangular
  - Não permite ajustes individuais
  - Mais usado pelo user agent para acessibilidade
  