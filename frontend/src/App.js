import React, {useState, useEffect} from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, [])

  function handleAddProject() {
    setProjects([...projects, {
      id: Date.now(),
      title: `Novo Projeto Criado em ${Date.now()}`,
      owner: 'Ebraim Carvalho'
    }]);
  }

  return (
    <>
      <Header title='Empresa Kether!' />
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;