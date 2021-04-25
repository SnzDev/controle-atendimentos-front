import Head from 'next/head';
import styles from '../../styles/Dashboard.module.css'

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
                <img src="./user-experience.svg" />
            </div>

        </div>
    );
}