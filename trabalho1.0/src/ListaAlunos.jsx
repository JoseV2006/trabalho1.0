const alunos = [
    "João Silva",
    "Maria Oliveira",
    "Lucas Souza",
    "Ana Costa",
    "Pedro Lima"
  ];
  
  function ListaAlunos() {
    return (
      <div>
        <h3>Lista de Alunos:</h3>
        <ul>
          {alunos.map((aluno, index) => (
            <li key={index}>{aluno}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ListaAlunos;
  
