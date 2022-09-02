import * as React from 'react';
import styles from './TaskForm.module.css';

export interface IAppProps {
  btnText: string
}

function TaskForm ({btnText}: IAppProps) {

  const [id, setId] = React.useState<number>(0);
  const [title, setTitle] = React.useState<string>('');
  const [difficulty, setDifficult] = React.useState<number>(0);
 
  const addTaskHandler = () => {

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value) 
     } else {
      setDifficult(parseInt(e.target.value)) // dado do input é uma string e queremos um numero
    }
  }
  console.log(title);
  console.log(difficulty);
  

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Título:</label>
        <input 
          type='text' 
          name='title' 
          placeholder='Título da Tarefa'
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='difficulty'>Dificuldade:</label>
        <input 
          type='text' 
          name='difficulty' 
          placeholder='Dificuldade da Tarefa' 
          onChange={handleChange}
        />
      </div>
      <input type='submit' value={btnText}/>
    </form>
  );
}

export default TaskForm;