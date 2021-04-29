import { useState } from 'react';
import styles from '../../../styles/AdcionarMembro.module.css';
import axios from 'axios';

export default function Adcionar () {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [telefone, setTelefone] = useState('')
    const [tipo, setTipo] = useState(1);


    function login(e) {
        e.preventDefault();
        console.log("Nome " + nome);
        console.log("Email " + email);
        console.log("Senha " + senha);
        console.log("ConfirmarSenha " + confirmarSenha);
        console.log("Telefone " + telefone);
        console.log("Tipo " + tipo);

        if (senha != confirmarSenha) {
            alert('Senhas não conferem!')
            return;
        } else {


            const options = {
                method: 'POST',
                url: 'http://localhost:3333/usuarios',
                headers: { 'Content-Type': 'application/json' },
                data: {
                    nome,
                    telefone,
                    email,
                    senha,
                    cargo_id: tipo,
                }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
                alert('Usuário Cadastrado!');
            }).catch(function (error) {
                console.error(error);
            });
        }


    }

    return (
        <div className={styles.conteudoContainer}>
            <label className={styles.conteudoTitulo}>Adcionar</label>
            <div className={styles.conteudoItem}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }}
                    placeholder="Nome" />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder="Email" />
            </div>
            <div className={styles.conteudoItem}>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => { setSenha(e.target.value) }}
                    placeholder="Senha" />
                <input
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => { setConfirmarSenha(e.target.value) }}
                    placeholder="Confirmar Senha" />
            </div>
            <div className={styles.conteudoItem}>
                <input
                    type="text"
                    value={telefone}
                    onChange={(e) => { setTelefone(e.target.value) }}
                    placeholder="Telefone" />
            </div>
            <hr></hr>
            <div className={styles.conteudoTipo}>
                <label>Tipo:</label>
                <div>
                    <input
                        value={3}
                        onChange={(e) => { setTipo(e.target.value) }}
                        id="admin"
                        name="tipo"
                        type="radio" />
                    <label htmlFor="admin">Administrador</label>
                </div>
                <div>
                    <input
                        value={2}
                        onChange={(e) => { setTipo(e.target.value) }}
                        id="super"
                        name="tipo"
                        type="radio" />
                    <label htmlFor="super">Supervisor</label>
                </div>
                <div>
                    <input
                        defaultChecked
                        value={1}
                        onChange={(e) => { setTipo(e.target.value) }}
                        id="tec"
                        name="tipo"
                        type="radio" />
                    <label htmlFor="tec">Técnico</label>
                </div>

            </div>
            <div className={styles.conteudoBtn}>
                <button className={styles.btnLogin} onClick={(e) => { login(e) }}>Cadastrar</button>
            </div>

        </div>
    );
}