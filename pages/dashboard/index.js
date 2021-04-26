import Head from 'next/head';
import styles from '../../styles/Dashboard.module.css'
import Adcionar from './membro/adcionar';

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
                <img src="./user-experience.svg" />
                <Adcionar />
                */}
                <div className={styles.conteudoContainer}>
                    <div className={styles.esquerda}>
                        <div class={styles.rota}>
                            <div className={styles.rotaItem}>
                                <div className={styles.iconeRealizado}>
                                    <img src="./placeholder.svg" />
                                </div>
                                <div className={styles.rotaContainer}>
                                    <span className={styles.horario}>08:00 - 08:19</span>
                                    <span className={styles.local}>Estoque</span>
                                </div>
                            </div>
                            <div className={styles.divisoriaContainer}>
                                <div className={styles.divisoria}>
                                </div>
                            </div>

                            <div className={styles.rotaItem}>
                                <div className={styles.iconeAndamento}>
                                    <img src="./timer.svg" />
                                </div>
                                <div className={styles.rotaContainer}>
                                    <span className={styles.horario}>08:00 - 00:00</span>
                                    <span className={styles.local}>Thálisson</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.direita}>
                        <div className={styles.cliente}>
                            <div className={styles.horario}>
                                <span>Hoje 09/04 às 08:53</span>
                            </div>
                            <div className={styles.dadosCliente}>
                                <div>
                                    <img src="./clock.svg" />
                                </div>
                                <div className={styles.dadosContainer}>
                                    <span className={styles.nome}>Deusa Maria Silva</span>
                                    <span className={styles.tipoOs}>Sem Internet</span>

                                    <span className={styles.cto}>PRP AA.1.1.1 - P 02</span>
                                    <span className={styles.ppoe}>teste@onlinetelecom</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.servicoRealizado}>
                            <div className={styles.servico}>
                                <span className={styles.servicoTitulo}>Serviço Realizado</span>
                                <span className={styles.servicoTexto}>Realizado troca de ont g-240w-a por g-240w-f, serial: ALCL:B14323A2.</span>
                            </div>
                            <hr></hr>
                            <div className={styles.obs}>
                                <span className={styles.servicoTitulo}>Observações</span>
                                <span className={styles.servicoTexto}>Cliente deseja outra visita no sábado as 14:00.</span>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}