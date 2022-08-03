import "./styles.css"

// Através de props, conseguimos acessar as propriedades dos componentes
// pode ser chamado como props ou {propriedades}
export function Card({name, time}){

  return(
    // No react, quando uma classe é utilizada para estilização,
    // ela é inicializada por className, não só por classe
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
      {/* Se a chamada na função fosse como (props):
      <strong>{props.name}</strong>
      <small>{props.time}</small> */}
    </div>
  )
}