# Qual usar?

## getElementById
  * (element)
  Ex: car-id, animal

## getElementByClassName
  * (HTMLCollection)
  Ex: car-class, loading

## getElementByTagName
  * (HTMLCollection)
  Ex: h1, p

## querySelector
  * (element)
  Ex: .class, #id

## querySelectorAll
  * (NodeList)
  * Caso precise usar for each
  Ex: .class, #id

## Dica
Os que possuem mais praticidade para uso são `querySelector` e `querySelectorAll`, porém em questão de tempo o `querySelector` é mais lento que `getElemtnById`, mas não é uma diferença perceptível.

