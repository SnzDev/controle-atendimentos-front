import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Home() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  function login(e) {
    e.preventDefault();


    var options = {
      method: 'POST',
      url: 'http://localhost:3333/session',
      headers: { 'Content-Type': 'application/json' },
      data: { email, senha }
    };

    axios.request(options).then(function (response) {
      const token = response.data.token;
      const auth = response.data.auth;
      const usuario = response.data.usuario;
      console.log('Email: ' + email);
      console.log('Senha: ' + senha);

      if (auth) {
        Cookie.set(
          'token', token, {
          expires: 1440,
        })
        Cookie.set('nome', usuario.nome, {
          expires: 144
        });
        Cookie.set('cargo', usuario.cargo_id, {
          expires: 144
        });

        router.replace('/dashboard')
      }

    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    const token = Cookie.get(token);
    if (Object.keys(token).length > 0) {
      router.replace('/dashboard')
    }
  }, [])



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
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            placeholder="Email ou telefone" />

          <input
            type="password"
            value={senha}
            onChange={(e) => { setSenha(e.target.value) }}
            placeholder="Senha" />

          <button className={styles.btnLogin} onClick={(e) => login(e)}>Entrar</button>
          <hr></hr>
          <label>Esqueceu a senha?</label>
        </div>
      </form>
    </div>

  )
}