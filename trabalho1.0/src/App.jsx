import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bem Vindo!</h1>
      <button onClick={() => setCount((count) => count + 1)}>
          Clica Aqui! {count}
        </button>
      <h1>Lista de Presença React</h1>
      <h2>Aluno: José Vinícius Ribeiro e Silva - 01797856</h2>
      
      <h3>Resposta recebida com Sucesso!</h3>
      <button onClick={() => setCount((count) => count + 1)}>
          SUCESSO! {count}
        </button>
  

        <button onClick={() => setCount((count) => count + 1)}>
          ERROR! {count}
        </button>
      <h3>Lista de Alunos</h3>
      <h4>João Silva</h4>
      <h4>Maria Oliveira</h4>
      <h4>Lucas Souza</h4>
      <h4>Ana Costa</h4>
      <h4>Pedro Lima</h4>

      <div className="card">

        <p>
          Disciplina: Front End   
          Professor: Renato Freire
          </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </p>
   
    </>

  )
}

export default App

