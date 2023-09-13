import React, { useState } from 'react';
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './App.module.scss';
import { Cronometro } from '../Cronometro';

function App() {
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
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
