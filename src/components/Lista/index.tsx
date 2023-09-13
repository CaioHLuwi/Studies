import React, { useState } from "react";
import style from './Lista.module.scss';
import Item from "./Item";

function Lista(){
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React', // useState = valor default
        tempo: '02:00:00' // setTarefas = função para definir um novo estado, no onClick por exemplo
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }])
    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }])
            }}> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;