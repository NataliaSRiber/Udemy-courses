import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.css'
import TaskForm from './components/TaskForm/TaskForm';
import { ITask } from './interfaces/Task';
import TaskList from './components/TaskList/TaskList';



function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]); // lista de tarefas
  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => {
      return task.id !== id;
    }));
  };

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
          <TaskList taskList={taskList} handleDelete={deleteTask}/>
          <p>Lista</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
