import React from 'react';
// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';
// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
// 6 - Desestructuring
import Destructuring from './components/Destructuring';
// 7 - Hook useState
import State from './components/State';

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
      <SecondComponent name="Belinha"/>
      <Destructuring 
        title='Dogs fofos'
        content='Nossos dogs'
        commentsQty={5}
        tags={['Xitara','Belinha', 'Kalifa', 'Tufão', 'Mel']} 
      />
      <State />
    </div>
  );
}

export default App;
