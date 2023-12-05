import './App.css';
import 'fontsource-roboto'
import FormularioCadastro from './componentes/FormularioCadastro/Formulario';
import { Container, Typography } from '@mui/material';

function App() {

  function aoEnviarForm(dados) {
    console.log(dados)
  }

  function validarCPF(CPF) {
    if(CPF.length !== 11) {
      return { valido: false, texto: 'CPF deve ter 11 digitos' }
    } else {
      return { valido: true, texto: '' }
    }
  }

  return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' align='center' component='h1'>Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
  );
}

export default App;
