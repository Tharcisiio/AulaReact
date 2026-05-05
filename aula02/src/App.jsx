import "./App.css";
import Exemplo1 from "./Exemplo1";

import Exercicio1 from "./Exercicio1";

import Exercicio2 from "./Exercicio2";

import Exercicio3 from "./Exercicio3";

export default function App() {
  return (
    <div>
      <h1>Aula 02 - Criação de Componentes</h1>

      <div className="card">
        <h3>Chamadas para o Componente Exemplo 1</h3>

    <Exemplo1 numero1={10} numero2={20} />
      </div>
      

      <div className="card">
        <h3>Exercício 1</h3>
        <Exercicio1 numero={12} />
        <Exercicio1 numero={67} />
        <Exercicio1 numero={-5} />

      </div>


      <div className="card">
        <h3>Chamadas para o Componente Exercicio 2</h3>

        
      <Exercicio2 peso= {60} altura= {80} />
        
        </div>


        <div className="card">
              <h3>Chamadas para o Componente Exercicio 3</h3>

              <Exercicio3 nota1= {7} nota2 = {9} />

        </div>





      


     
   
      </div>

  )
}