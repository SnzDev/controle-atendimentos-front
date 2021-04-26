import styles from '../../../styles/Atendimentos.module.css';
export default function () {
    return (
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
    );
}
