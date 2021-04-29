import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Dashboard.module.css'
import Cookie from 'js-cookie';
import Adcionar from './membro/adcionar';
import Atendimentos from './membro/atendimentos';
import AdcionarAtendimentos from './membro/adcionarAtendimentos';


var axios = require("axios");


export default function Dashboard() {
    const [valorTela, setValorTela] = useState(0);
    const router = useRouter();
    const [usuarios, setUsuarios] = useState([]);
    const [idSelecionado, setIdSelecionado] = useState(0);
    const nome = Cookie.get('nome');

    useEffect(() => {
        if (Cookie.get('token') == null) {
            router.replace('/')
            return;
        }


        var options = { method: 'GET', url: 'http://localhost:3333/usuarios' };

        axios.request(options).then(function (response) {
            setUsuarios(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, [1])

    function tela() {

        if (valorTela == 0) {
            return (<img src="./user-experience.svg" />);
        } else if (valorTela == 1) {
            console.log(idSelecionado)
            return <Atendimentos idSelecionado={idSelecionado} />

        } else if (valorTela == 2) {
            return <Adcionar />
        }
        else if (valorTela == 3) {
            return <AdcionarAtendimentos />
        }
        else if (valorTela == 4) {
            router.replace('/logout')
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.menu}>
                <div className={styles.cabecalho}>
                    <div class={styles.cabecalhoContainer}>
                        <div className={styles.icone}>
                        ON
                    </div>
                        <div className={styles.cabecalhoItem}>
                            <span className={styles.nome}>{Cookie.get('nome')}</span>
                            <span className={styles.cargo}></span>
                        </div>

                    </div>
                    <div className={styles.dropdown}>
                        <img src="./more-options.svg" />
                        <div className={styles.subMenu}>
                            <a onClick={() => { setValorTela(2) }}>Adicionar</a>
                            {Cookie.get('cargo') == 3 ? (
                                <a onClick={() => { setValorTela(3) }}>Adcionar Atendimentos</a>):''
                            }

                            {/*<a onClick={() => { setValorTela(2) }}>Lista</a>*/}
                            <a onClick={() => { setValorTela(4) }}>Encerrar</a>
                        </div>
                    </div>

                </div>

                <div className={styles.pesquisar}>
                    <input type="text" placeholder="Pesquisar Participante" />
                    <hr></hr>
                </div>

                {/*<div className={styles.equipesTrabalhando}>
                    <label>Equipes/Membros Trabalhando</label>
                    <div onClick={() => { alert('aa') }} className={styles.membro}>
                        <div>
                            <div className={styles.icone}>
                                EV
                            </div>
                        </div>
                        <div>
                            <span className={styles.nomeMembro}>Edy Vanrálley</span>
                            <span className={styles.status}>Em Atendimento</span>
                        </div>
                    </div>
                </div>*/}
                <div className={styles.membros}>
                    <label>Todos os Membros</label>
                    {usuarios.map(u => {
                        return (
                            <div key={u.id} onClick={(e) => { setIdSelecionado(u.id), setValorTela(1) }} className={styles.membro}>
                                <div>
                                    <div className={styles.icone}>
                                        {u.nome[0]}
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.nomeMembro}>{u.nome.substr(0, u.nome.indexOf(' '))}</span>
                                    <span className={styles.status}>{u.cargo_nome}</span>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div className={styles.conteudo}>

                {tela()}

            </div>

        </div>
    );
}