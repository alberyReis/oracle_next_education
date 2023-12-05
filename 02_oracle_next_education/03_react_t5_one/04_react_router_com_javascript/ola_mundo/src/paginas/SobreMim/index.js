import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo"
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.jpeg'

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá eu sou Albery</h3>
      <img src={fotoSobreMim} alt='Foto sobre mim' className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>
        É com satisfação que me apresento como Albery, um profissional com foco no desenvolvimento Front-end, e é uma honra compartilhar meu conhecimento neste espaço educativo.
      </p>
      <p className={styles.paragrafo}>
        Minha trajetória teve início na compreensão dos pilares da web: HTML, CSS e JavaScript. Essas linguagens formam a base de qualquer interface digital. O HTML fornece a estrutura, o CSS dá estilo e o JavaScript proporciona interatividade.Esses elementos são como blocos de construção, permitindo que as páginas ganhem vida.
      </p>
      <p className={styles.paragrafo}>
        Minha experiência se expandiu para incluir o React, uma biblioteca JavaScript que torna o desenvolvimento de interfaces mais eficiente e flexível. Com o React, é possível criar componentes reutilizáveis e interfaces dinâmicas, proporcionando uma experiência mais agradável para os usuários.
      </p>
      <p className={styles.paragrafo}>
        Neste blog, nossa missão é explorar os princípios fundamentais do desenvolvimento Front-end, compartilhar dicas práticas, discutir tendências e promover a colaboração. Quer você esteja dando os primeiros passos na criação de páginas web ou procurando aprimorar suas habilidades, estou aqui para auxiliar e proporcionar insights valiosos.
      </p>
      <p className={styles.paragrafo}>
        Sintam-se à vontade para explorar o conteúdo, fazer perguntas e participar ativamente. A jornada pelo desenvolvimento de interfaces é constante, e estou entusiasmado para aprender com todos vocês e contribuir para o seu crescimento.
      </p>
      <p className={styles.paragrafo}>
        Sejam bem vindos! Juntos, vamos explorar esse mundo emocionante e fortalecer nossas habilidades nessa área em constante evolução.
      </p>
    </PostModelo>
  )
}