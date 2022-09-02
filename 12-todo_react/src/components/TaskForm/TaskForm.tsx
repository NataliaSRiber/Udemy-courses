import * as React from 'react';
import { ITask } from '../../interfaces/Task';
import styles from './TaskForm.module.css';

export interface IAppProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>; //é opcional mas pode vir fomulario de edição
}

function TaskForm ({btnText, taskList, setTaskList}: IAppProps) {

  const [id, setId] = React.useState<number>(0);
  const [title, setTitle] = React.useState<string>('');
  const [difficulty, setDifficult] = React.useState<number>(0);
 
  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty };
    setTaskList!([...taskList, newTask]); // ! o argumento virá
    setTitle('');
    setDifficult(0);
    console.log(taskList);
    
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value) 
     } else {
      setDifficult(parseInt(e.target.value)) // dado do input é uma string e queremos um numero
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Título:</label>
        <input 
          name='title' 
          onChange={handleChange}
          placeholder='Título da Tarefa'
          type='text'
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='difficulty'>Dificuldade:</label>
        <input 
          name='difficulty' 
          onChange={handleChange}
          placeholder='Dificuldade da Tarefa' 
          type='text' 
          value={difficulty}
        />
      </div>
      <input type='submit' value={btnText}/>
    </form>
  );
}

export default TaskForm;