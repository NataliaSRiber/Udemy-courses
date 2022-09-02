import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.css'
import TaskForm from './components/TaskForm/TaskForm';
import { ITask } from './interfaces/Task';



function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]); // lista de tarefas

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm 
            btnText='Criar Tarefa' 
            taskList={taskList}
            setTaskList={setTaskList}
          />
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
