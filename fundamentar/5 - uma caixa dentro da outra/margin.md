## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<lenght>`| `<percentage>`| auto

```css
div{
    /* shorthand */
   
   /* como um relógio: top, right, bottom, left */
    margin: 12px 16px 10px 4px;  

    /* top, laterais, bottom */
    margin: 12px 16px 0px;    

    /* verticais, laterais */
    margin: 8px 16px;    

    /* todas as laterais */
    margin: 8px;    
}
```

    * Cuidado com a margin colllapsing (top se ajunta ao bottom)


    https://developer.mozilla.org/pt-BR/docs/Web/CSS/margin