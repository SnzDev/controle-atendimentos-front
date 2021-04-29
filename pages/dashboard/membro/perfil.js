import styles from '../../../styles/Perfil.module.css';

export default function Perfil() {
    return (
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
    );
}