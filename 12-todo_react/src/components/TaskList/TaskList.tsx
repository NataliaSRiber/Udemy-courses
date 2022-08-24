import * as React from 'react';

export interface IAppProps {
}

function TaskList (props: IAppProps) {
  return (
    <div>
      <h2>Suas Tarefas:</h2>
      <p>Lista</p>
    </div>
  );
}

export default TaskList;