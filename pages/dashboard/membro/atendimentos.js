import { useEffect, useState } from 'react';
import styles from '../../../styles/Atendimentos.module.css';
var axios = require("axios");

export default function Atendimentos(props) {

    const [atendimentos, setAtendimentos] = useState([]);
    const [idAtendimento, setIdAtendimento] = useState([])
    const [dadosAtendimento, setDadosAtendimento] = useState([]);
    const date = new Date();
    const dataAtual = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + (date.getDate());
    console.log(dataAtual);

    function finalizarAtendimentos(id) {
        var servicoRealizado = prompt("SERVIÇO REALIZADO: ");
        var obs = prompt("OBS: ");

        console.log(servicoRealizado);
        console.log(obs);


        var options = {
            method: 'POST',
            url: 'http://localhost:3333/atendimento/' + id,
            headers: { 'Content-Type': 'application/json' },
            data: { servicoRealizado: servicoRealizado, obs: obs }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }
    useEffect(() => {
        var options = {
            method: 'POST',
            url: 'http://localhost:3333/atendimento',
            headers: { 'Content-Type': 'application/json' },
            data: { id: props.idSelecionado, data: dataAtual }
        };

        axios.request(options).then(function (response) {
            setAtendimentos(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        console.log(props.idSelecionado)

    }, [props.idSelecionado])

    useEffect(() => {
        var options = { method: 'GET', url: 'http://localhost:3333/atendimento/' + idAtendimento };

        axios.request(options).then(function (response) {
            setDadosAtendimento(response.data)
        }).catch(function (error) {
            console.error(error);
        });
        console.log(props.idSelecionado)

    }, [idAtendimento])

    return (
        <div className={styles.conteudoContainer}>
            <div className={styles.esquerda}>
                <div className={styles.rota}>
                    {atendimentos.map(a => {
                        const hora_inicio = new Date(a.created_on);
                        const hora_final = new Date(a.updated_on);

                        const horaInicial = (hora_inicio.getHours() + ":" + hora_inicio.getMinutes());
                        const horaFinal = (hora_final.getHours() + ":" + hora_final.getMinutes());

                        return (<>

                            <div onClick={() => { setIdAtendimento(a.id) }} className={styles.rotaItem}>
                                <div className={styles.iconeRealizado}>

                                    {a.status == 1 ? <img src="./placeholder.svg" /> : <img src="./timer.svg" />}
                                </div>
                                <div className={styles.rotaContainer}>
                                    <span className={styles.horario}>
                                        {horaInicial} {a.status == 1 ? ' - ' + horaFinal : ''}
                                    </span>
                                    <span className={styles.local}>{a.nome}</span>
                                </div>
                            </div>
                            {a.status == 1 ? (<div className={styles.divisoriaContainer}>
                                <div className={styles.divisoria}>
                                </div>
                            </div>) : (<div className={styles.divisoriaContainer}>
                                <button className={styles.btnLogin} onClick={() => { finalizarAtendimentos(a.id) }}>Finalizar</button>
                            </div>)}


                        </>)
                    })}
                </div>
            </div>
            <div className={styles.direita}>
                {dadosAtendimento.map(dados => {
                    const hora_inicio = new Date(dados.created_on);
                    const hora_final = new Date(dados.updated_on);

                    const dataAtual = hora_inicio.getDate() + "/" + (hora_inicio.getMonth() + 1)
                    const horaInicial = (hora_inicio.getHours() + ":" + hora_inicio.getMinutes());
                    const horaFinal = (hora_final.getHours() + ":" + hora_final.getMinutes());
                    return (<>
                        <div className={styles.cliente}>
                            <div className={styles.horario}>
                                <span>{'Dia: ' + dataAtual + " - Início: " + horaInicial}
                                    {dados.status == 1 ? " - Encerramento: " + horaFinal : ''}
                                </span>
                            </div>
                            <div className={styles.dadosCliente}>
                                <div>
                                    <img src="./clock.svg" />
                                </div>
                                <div className={styles.dadosContainer}>
                                    <span className={styles.nome}>{dados.nome}</span>
                                    <span className={styles.tipoOs}>{dados.tipo}</span>

                                    <span className={styles.cto}>{dados.cto} - P {dados.porta}</span>
                                    <span className={styles.ppoe}>{dados.usuario}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.servicoRealizado}>
                            <div className={styles.servico}>
                                <span className={styles.servicoTitulo}>Serviço Realizado{dados.status == 0 ? '(em andamento)' : ''}</span>
                                <span className={styles.servicoTexto}>{dados.servico_realizado}</span>
                            </div>
                            <hr></hr>
                            <div className={styles.obs}>
                                <span className={styles.servicoTitulo}>Observações</span>
                                <span className={styles.servicoTexto}>{dados.obs}</span>
                            </div>

                        </div>
                    </>)
                })}

            </div>
        </div>
    );
}
