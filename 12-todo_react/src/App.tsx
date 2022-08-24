import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.css'
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar Tarefa'/>
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <p>Lista</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
