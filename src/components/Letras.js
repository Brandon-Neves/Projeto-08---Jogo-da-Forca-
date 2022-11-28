import '../components/Letras.css'

export default function Letras(props) {
  return (
    <div className="letras">
      {props.alfabeto.map(l => (
        <button
          key={l}
          disabled={props.letrasUtilizadas.includes(l)}
          onClick={() => props.letraClicada(l)}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
