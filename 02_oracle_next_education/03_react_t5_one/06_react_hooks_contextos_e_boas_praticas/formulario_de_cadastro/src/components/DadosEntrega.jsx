import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')

  return (
    <form onSubmit={(evento) => {
      evento.preventDefault()
      aoEnviar({ cep, endereco, numero, estado, cidade })
    }}>
      <TextField
        value={cep}
        onChange={evento => {
          setCep(evento.target.value)
        }}
        id="cep"
        name="cep"
        label="CEP..."
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={endereco}
        onChange={evento => {
          setEndereco(evento.target.value)
        }}
        id="endereco"
        name="endereco"
        label="Endereço..."
        type="text"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={numero}
        onChange={evento => {
          setNumero(evento.target.value)
        }}
        style={{ marginRight: '24px'}}
        id="numero"
        name="numero"
        label="Numero..."
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={estado}
        onChange={evento => {
          setEstado(evento.target.value)
        }}
        id="estado"
        name="estado"
        label="Estado..."
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={cidade}
        onChange={evento => {
          setCidade(evento.target.value)
        }}
        id="cidade"
        name="cidade"
        label="Cidade..."
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Finalizar Cadastro
      </Button>
    </form>
  )
}