import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

export default function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados)
    }
  })

  const formularios = [
    <DadosUsuario
      aoEnviar={coletarDados}
    />,
    <DadosPessoais
      aoEnviar={coletarDados}
    />,
    <DadosEntrega
      aoEnviar={coletarDados}
    />,
    <Typography
      style={{ padding: '40px', fontSize: '22px', textAlign: 'center' }}
    >
      Os dados foram enviados com sucesso
    </Typography>
  ]

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados })
    proximaEtapa()
  }

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>
            Login
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            Pessoal
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            Entrega
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            Fnalização
          </StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  )
}