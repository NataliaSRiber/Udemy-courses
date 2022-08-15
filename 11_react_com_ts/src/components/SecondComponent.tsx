import * as React from 'react';

export interface Props {
  name: string
}

export default function SecondComponent (props: Props) {
  return (
    <div>
      <h1>Meu segundo componente</h1>
      <p>O nome dela é {props.name}</p>
    </div>
  );
}
