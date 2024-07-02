import { Outlet } from 'react-router-dom'
import styles from './PaginaPadrao.module.css'
import Banner from 'componentes/Banner'

export default function PaginaPadrao() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  )
}