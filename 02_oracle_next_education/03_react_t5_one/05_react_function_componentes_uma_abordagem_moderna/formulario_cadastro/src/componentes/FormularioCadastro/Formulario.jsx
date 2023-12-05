
import { useState } from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@mui/material';

export default function FormularioCadastro({ aoEnviar, validarCPF }) {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [CPF, setCPF] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [erros, setErros] = useState({ cpf: { valido: true, texto:'' } })

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault()
        aoEnviar({ nome, sobrenome, CPF, promocoes, novidades})
      }}>
      <TextField
        value={nome}
        onChange={(evento) =>
          setNome(evento.target.value)
        }
        id="nome"
        label="Nome"
        variant="outlined"
        margin='normal'
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(evento) =>
          setSobrenome(evento.target.value)
        }
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin='normal'
        fullWidth
      />
      <TextField
        value={CPF}
        onChange={(evento) => {
          setCPF(evento.target.value)
        }}
        onBlur={(evento) =>{
          const CPFValido = validarCPF(evento.target.value)
          setErros({ cpf: CPFValido })
        }}
        error={!erros.cpf.valido}
        helperText='CPF deveter 11 digitos'
        id="cpf"
        label="CPF"
        variant="outlined"
        margin='normal'
        fullWidth
      />
      <FormControlLabel
        label='Promoções'
        control={
          <Switch
            checked={promocoes}
            onChange={evento => setPromocoes(evento.target.checked)}
            name='promocoes'
            color='primary'
          />
        }
      />
      <FormControlLabel
        label='Novidades'
        control={
          <Switch
            checked={novidades}
            onChange={evento => setNovidades(evento.target.checked)}
            name='novidades'
            color='primary'
          />
        }
      />
      <Button type='submit' variant="contained">Cadastrar</Button>
    </form>
  )
}