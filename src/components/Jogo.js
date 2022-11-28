import '../components/Jogo.css'

export default function Jogo(props) {
  return (
    <div className="container">
      <img src={props.imagensForca[props.numeroErros]} alt="" />
      <button onClick={props.comecarJogo}>Escolher Palavra</button>
      <h1>{props.apalavraEscolhida}</h1>
    </div>
  )
}
