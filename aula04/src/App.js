import './App.css';
import {useState} from "react";

function App() {
  const[vetor, setVetor] = useState( ["Guilherme Henrique de Souza", "Marcela Largata"] );
  const [aluno, setAluno] = useState("");

  function adicionar(){
    setVetor([...vetor, aluno]);
    setAluno("");
  }

  return (
    <div>
      <h1>Estudo de Vetores - Aula04</h1>
      <div className='conteudo'>
        <form>
          <p>
            Digite o nome do aluno <br />
            <input type="text" value={aluno} onChange={(e) => setAluno(e.target.value)} />
          </p>

          <p>
            <button type="button" onClick={adicionar}>Adicionar nome na lista</button>
          </p>
        </form>
      </div>
      <div className='conteudo'>
        <h3>Lista de Alunos</h3>
          <ul>
            {vetor.map(nome => (<li>{nome}</li>))}
          </ul>
      </div>
    </div>
  );
}

export default App;
