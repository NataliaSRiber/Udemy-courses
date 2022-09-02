import * as React from 'react';
import { ITask } from '../../interfaces/Task';

export interface IAppProps {
  taskList: ITask[];
}

function TaskList ({taskList}: IAppProps) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task)=> (
          <div key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div>
              <i className='="bi bi-pencil'></i>
              <i className='="bi bi-trash'></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas adicionadas</p>
      )}
    </>
  );
}

export default TaskList;