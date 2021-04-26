import Head from 'next/head';
import styles from '../../styles/Dashboard.module.css'
import Adcionar from './membro/adcionar';
import Atendimentos from './membro/atendimentos';

export default function Dashboard() {
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
                            EV
                    </div>
                        <div className={styles.cabecalhoItem}>
                            <span className={styles.nome}>Edy Vanrálley</span>
                            <span className={styles.cargo}>Designer</span>
                        </div>

                    </div>
                    <div className={styles.dropdown}>
                        <img src="./more-options.svg" />
                        <div className={styles.subMenu}>
                            <a href="">Adicionar</a>
                            <a href="">Histórico</a>
                            <a href="">Lista</a>
                            <a href="">Encerrar</a>
                        </div>
                    </div>

                </div>

                <div className={styles.pesquisar}>
                    <input type="text" placeholder="Pesquisar Participante" />
                    <hr></hr>
                </div>

                <div className={styles.equipesTrabalhando}>
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
                </div>
                <div className={styles.membros}>
                    <label>Todos os Membros</label>
                    <div className={styles.membro}>
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
                </div>
            </div>

            <div className={styles.conteudo}>
                {/*
                <img src="./user-experience.svg" />*/
                }

                <div className={styles.conteudoContainer}>

                    <div className={styles.perfil}>
                        <div className={styles.iconeMembro}>
                            <span>EV</span>
                        </div>
                        <div></div>
                        <div class={styles.dados}>
                            <span className={styles.titulo}>Edy Vanrállen</span>
                            <span className={styles.cargo}>Técnico</span>
                            <span className={styles.telefone}>86 99815842</span>
                            <span className={styles.email}>eddiecosta9123@gmail.com</span>
                        </div>
                        <hr></hr>

                        <div className={styles.rodape}>
                            <div className={styles.item}>
                                <img src="./atendimentos.svg" />
                                <span className={styles.titulo}>Atendimentos</span>
                                <span className={styles.valor}>3</span>
                            </div>
                            <div className={styles.item}>
                                <img src="./instalacao.svg" />
                                <span className={styles.titulo}>Instalações</span>
                                <span className={styles.valor}>10</span>
                            </div>
                            <div className={styles.item}>
                                <img src="./mudanca-endereco.svg" />
                                <span className={styles.titulo}>Mudanças de Endereço</span>
                                <span className={styles.valor}>1</span>
                            </div>
                            <div className={styles.item}>
                                <img src="./manutencao.svg" />
                                <span className={styles.titulo}>Manutenções</span>
                                <span className={styles.valor}>1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}