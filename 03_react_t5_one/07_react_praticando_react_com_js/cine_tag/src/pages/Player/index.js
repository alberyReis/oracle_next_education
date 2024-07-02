import Banner from 'componentes/Banner'
import styles from './Player.module.css'
import Titulo from 'componentes/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useEffect, useState } from 'react'

export default function Player() {
  const [video, setVideo] = useState()
  const parametros = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/alberyReis/api_cine_tag/videos?id=${parametros.id}`)
    .then(resposta => resposta.json())
    .then((dados) => {
      return setVideo(...dados)
    }, [])
  })

  if (!video) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem='player' />
        <Titulo>
          <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
          <iframe 
          width="80%" 
          height="80%" 
          src={video.link} 
          title={video.titulo} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen 
          />
        </section>
    </>
  )
}