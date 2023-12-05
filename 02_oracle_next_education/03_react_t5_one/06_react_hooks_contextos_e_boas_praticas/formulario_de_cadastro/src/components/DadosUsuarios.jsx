import React from "react"
import { Button, TextField } from "@material-ui/core"
import { useState, useContext } from "react"
import ValidacoesCadastro from "../contexts/ValidacoesCadastro"
import useErros from "../hooks/useErros"

export default function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form onSubmit={(evento) => {
      evento.preventDefault({})
      if (possoEnviar()) {
        aoEnviar({ email, senha })
      }
    }}>
      <TextField
        value={email}
        onChange={(evento) => {
          setEmail(evento.target.value)
        }}
        id="email"
        name="email"
        label="Email..."
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(evento) => {
          setSenha(evento.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="Senha..."
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Cadastar
      </Button>
    </form>
  )
}