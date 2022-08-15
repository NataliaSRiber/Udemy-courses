import React from 'react';
// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 1 - variáveis
const name: string = "Natalia";
const year: number = 2022;
const isWorking: boolean = true;

// 2 - funções
const userGreeting = (name: string): string => {
  return `Olá, ${name}`;
};

function App() {
  return (
    <div className="App">
      <h1>React com Typescript</h1>
      <h2>Nome: {name}</h2>
      <p>Ano: {year}</p>
      {isWorking && (
        <><div>
          <p>Está trabalhando!</p>
        </div><h3>{userGreeting(name)}</h3></>
      )}
      <FirstComponent />
    </div>
  );
}

export default App;
