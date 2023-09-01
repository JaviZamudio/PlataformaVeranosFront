import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <h1>Plataforma Veranos UAQ</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/solicitud">
              Solicitar materia
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className={styles.main}>
      <h1>Hola Mundo</h1> 
    </main>
    </>
  )
}
