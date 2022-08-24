import * as React from 'react';

export interface IAppProps {
  btnText: string
}

function TaskForm ({btnText}: IAppProps) {
  return (
    <form>
      <div>
        <label htmlFor='title'>Título:</label>
        <input type='text' name='title' placeholder='Título da Tarefa' />
      </div>
      <div>
        <label htmlFor='difficulty'>Dificuldade:</label>
        <input type='text' name='difficulty' placeholder='Dificuldade da Tarefa' />
      </div>
      <input type='submit' value={btnText}/>
    </form>
  );
}

export default TaskForm;