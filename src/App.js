import React, { useState } from 'react'
import './style/style.css'
import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'

import './App.css'
import palavras from './palavras'
import Chute from './components/Chute'
import Letras from './components/Letras'
import Jogo from './components/Jogo'
const alfabeto = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

export default function App() {
  const [numeroErros, setNumerosErros] = useState(0)
  const [palavraSorteada, setPalavraSorteada] = useState([])
  const [palavraEscolhida, setPalavraEscolhida] = useState([])
  const [desabilitarInput, setDesabilitarInput] = useState(true)
  const [letrasUtilizadas, setLetrasUtilizadas] = useState(alfabeto)
  const [palavraSemAcentos, setPalavraSemAcentos] = useState('')
  const [chuteUsuario, setChuteUsuario] = useState('')
  const [corPalavra, setCorPalavra] = useState('preto')

  function comecarJogo() {
    setDesabilitarInput(false)
    setNumerosErros(0)
    sortearPalavra()
    setChuteUsuario('')
    setLetrasUtilizadas([])
    setPalavraSorteada([])
    setCorPalavra()
  }

  function sortearPalavra() {
    const indice = Math.floor(Math.random() * palavras.length)
    const palavra = palavras[indice]
    const arrPalavra = palavra.split('')
    setPalavraSorteada(arrPalavra)
    console.log(palavra)

    let underline = []
    arrPalavra.forEach(l => underline.push(' _'))
    setPalavraEscolhida(underline)

    const palavraCriada = palavra.normalize('NFD').replace(/\p{Mn}/gu, '')
    setPalavraSemAcentos(palavraCriada)
  }

  function letraClicada(letra) {
    setLetrasUtilizadas([...letrasUtilizadas, letra])
    if (palavraSemAcentos.includes(letra)) {
      letraCerta(letra)
    } else {
      letraErrada(letra)
    }
  }

  function letraCerta(letra) {}

  function letraErrada(letra) {
    const qtdErros = numeroErros + 1
    setNumerosErros(qtdErros)

    if (qtdErros === 6) {
      setCorPalavra('vermelho')
      finalJogo()
    }
  }

  function chutarPalavra() {
    let palavraChutada = palavraEscolhida.join('')
    if (chuteUsuario === palavraChutada) {
      setCorPalavra('verde')
    } else {
      setCorPalavra('vermelho')
      setNumerosErros(6)
    }
    finalJogo()
  }

  function finalJogo() {
    setLetrasUtilizadas(alfabeto)
    setChuteUsuario('')
    setPalavraEscolhida(palavraSorteada)
  }

  return (
    <div className="App">
      <Jogo
        imagensForca={imagensForca}
        numeroErros={numeroErros}
        comecarJogo={comecarJogo}
        palavraEscolhida={palavraEscolhida}
      />
      <Letras
        alfabeto={alfabeto}
        letrasUtilizadas={letrasUtilizadas}
        letraClicada={letraClicada}
      />

      <Chute
        desabilitarInput={desabilitarInput}
        chuteUsuario={chuteUsuario}
        setChuteUsuario={setChuteUsuario}
        chutarPalavra={chutarPalavra}
      />
    </div>
  )
}
