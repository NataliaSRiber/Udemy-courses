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
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>Não há tarefas adicionadas</p>
      )}
    </>
  );
}

export default TaskList;