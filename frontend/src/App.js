import React, {useState} from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-End']);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto criado em: ${Date.now()}`]);
  }

  return (
    <>
      <Header title='Empresa Kether!' />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;