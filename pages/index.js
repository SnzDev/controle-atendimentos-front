import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.loginGifs}>
        <img src='./online-gif.gif' />
      </div>

      <form>

        <div className={styles.login}>
        <img className={styles.roboGif} src='./robo-online.gif' />
          <input type="text" placeholder="Email ou telefone" />
          <input type="password" placeholder="Senha" />
          <button className={styles.btnLogin}>Entrar</button>
          <hr></hr>
          <label>Esqueceu a senha?</label>
        </div>
      </form>
    </div>

  )
}