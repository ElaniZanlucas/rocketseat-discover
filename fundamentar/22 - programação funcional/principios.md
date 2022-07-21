# Paradigmas

* Programação Imperativa
  * O código é `pensado e gerado em sequência`
  * Como uma receita de bolo
  * Uma coisa depende da outra
  * O estado de um dado é `alterado constantemente`, causando mutações nas variáveis
  * `Orientação a objetos` é um tipo de paradigma imperativo

* Programação Declarativa
  * O código é gerado para `fazer algo`, não importa `como`
  * `Oq fazer` e não como fazer
  * Não há necessidade de um passo a passo no código
  * `Programação funcional`é um tipo de paradigma declarativo


# Dados

* Imutabilidade
  * Uma variável não pode variar
  * Se precisar mudar, vc `cria uma nova`

* Stateless
  * Não guarda `estado`
  * A função só conhece dados entregues a ela
  * A resposta não poderá variar

# Funções

* Independentes
  * Deverá `retornar` algo
  * Nada que acontecer dentro afeta o mundo externo
    * dados imutáveis
    * não guardar estado
  * Não faremos uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão

* Puras
  * Não deverá `depender de nenhum dado externo` a não ser oq foi passado como argumento
  * Não deverá sofrer `nenhuma inteferência` do mundo externo
  * Se o argumento é o mesmo, `o retorno não poderá ser diferente` quando a função for chamada novamente
  * Não terá `nenhum efeito colateral no seu código`
    * Não irá modificar nenhum dado
    * Não irá guardar nenhum estado

* Higher-order
  * Funções que `recebem funções` como argumentos
  * Funçoes que poderão `retornar outras funções`

* First-class
  * Podem estar em qualquer lugar, inclusive como parâmetro de outras funções
  * A função poderá ser entendida como uma variável

* Composição
  * Um `encadeamento` de funções
  * Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra...