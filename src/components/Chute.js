import '../components/Chute.css'

export default function Chute(props) {
  return (
    <div className="chutar">
      <span>Já sei a palavra</span>
      <input disabled={props.desabilitarInput} type="text" />
      <button onClick={props.chutarPalavra}>Chutar</button>
    </div>
  )
}
