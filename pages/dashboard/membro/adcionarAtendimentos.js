import { useState, useEffect } from 'react';
import styles from '../../../styles/AdcionarAtendimento.module.css';
import axios from 'axios';


export default function Adcionar() {
    const [idCliente, setIdCliente] = useState();
    const [idUsuario, setIdUsuario] = useState();
    const [tipo, setTipo] = useState(1);

    const [clientes, setClientes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);





    function login(e) {
        e.preventDefault();


        if (idCliente >= 1 && idUsuario >=1) {
            var options = {
                method: 'POST',
                url: 'http://localhost:3333/atendimentos',
                headers: { 'Content-Type': 'application/json' },
                data: { id_cliente: idCliente, id_tipo_os: tipo, id_usuario: idUsuario, servico_realizado: '', obs: '' }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
                alert('Atendimento Cadastrado!');
            }).catch(function (error) {
                console.error(error);
            });
        } else {
            alert('Error')


        }


    }

    useEffect(() => {
        var options = { method: 'GET', url: 'http://localhost:3333/clientes' };

        axios.request(options).then(function (response) {
            setClientes(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        var options = { method: 'GET', url: 'http://localhost:3333/usuarios' };

        axios.request(options).then(function (response) {
            setUsuarios(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className={styles.conteudoContainer}>
            <label className={styles.conteudoTitulo}>Adcionar</label>
            <div className={styles.conteudoItem}>

                <select onChange={(e) => { setIdCliente(e.target.value) }}>
                    <option>SELECIONE O CLIENTE</option>
                    {clientes.map(c => {
                        return (<option key={c.id} value={c.id}>
                            {c.nome}
                        </option>)
                    })}

                </select>
                <select onChange={(e) => { setIdUsuario(e.target.value) }}>
                    <option>SELECIONE O USUÁRIO</option>

                    {usuarios.map(u => {
                        return (<option key={u.id} value={u.id} >
                            {u.nome}
                        </option>)
                    })}

                </select>
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
                    <label htmlFor="admin">Manutenção</label>
                </div>
                <div>
                    <input
                        value={2}
                        onChange={(e) => { setTipo(e.target.value) }}
                        id="super"
                        name="tipo"
                        type="radio" />
                    <label htmlFor="super">Mudança de Endereço</label>
                </div>
                <div>
                    <input
                        defaultChecked
                        value={1}
                        onChange={(e) => { setTipo(e.target.value) }}
                        id="tec"
                        name="tipo"
                        type="radio" />
                    <label htmlFor="tec">Instalação</label>
                </div>

            </div>
            <div className={styles.conteudoBtn}>
                <button className={styles.btnLogin} onClick={(e) => { login(e) }}>Cadastrar Atendimento</button>
            </div>

        </div>
    );
}