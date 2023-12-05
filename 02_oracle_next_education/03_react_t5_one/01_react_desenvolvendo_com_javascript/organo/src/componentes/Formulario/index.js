import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

export default function Formulario(props) {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          placeholder='Digite seu nome...'
          label='Nome' CampoTexto
          obrigatorio={true}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          placeholder='Digite seu cargo...'
          label='Cargo'
          obrigatorio={true}
          valor={cargo}
          aoAlterado={cargo => setCargo(cargo)}
        />
        <CampoTexto
          placeholder='Informe o endereço da imagem...'
          label='Imagem'
          obrigatorio={true}
          valor={imagem}
          aoAlterado={imagem => setImagem(imagem)}
        />
        <ListaSuspensa
          label='Times'
          itens={props.times}
          obrigatorio={true}
          valor={time}
          aoAlterado={time => setTime(time)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}