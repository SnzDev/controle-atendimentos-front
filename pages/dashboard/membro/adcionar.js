import styles from '../../../styles/AdcionarMembro.module.css';

export default function () {
    return (
        <div className={styles.conteudoContainer}>
            <label className={styles.conteudoTitulo}>Adcionar</label>
            <div className={styles.conteudoItem}>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Email" />
            </div>
            <div className={styles.conteudoItem}>
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirmar Senha" />
            </div>
            <div className={styles.conteudoItem}>
                <input type="text" placeholder="Telefone" />
                <input type="text" placeholder="WhatsApp" />
            </div>
            <div className={styles.conteudoItem}>
                <input type="text" placeholder="CPF" />
            </div>
            <div className={styles.conteudoItem}>
                <input type="text" placeholder="Endereço" />
            </div>
            <hr></hr>
            <div className={styles.conteudoTipo}>
                <label>Tipo:</label>
                <div>
                    <input id="admin" name="tipo" type="radio" />
                    <label htmlFor="admin">Administrador</label>
                </div>
                <div>
                    <input id="super" name="tipo" type="radio" />
                    <label htmlFor="super">Supervisor</label>
                </div>
                <div>
                    <input id="tec" name="tipo" type="radio" />
                    <label htmlFor="tec">Técnico</label>
                </div>

            </div>
            <div className={styles.conteudoBtn}>
                <button className={styles.btnLogin}>Cadastrar</button>
            </div>

        </div>
    );
}