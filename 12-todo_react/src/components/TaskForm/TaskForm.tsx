import * as React from 'react';
import styles from './TaskForm.module.css'

export interface IAppProps {
  btnText: string
}

function TaskForm ({btnText}: IAppProps) {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Título:</label>
        <input type='text' name='title' placeholder='Título da Tarefa' />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='difficulty'>Dificuldade:</label>
        <input type='text' name='difficulty' placeholder='Dificuldade da Tarefa' />
      </div>
      <input type='submit' value={btnText}/>
    </form>
  );
}

export default TaskForm;