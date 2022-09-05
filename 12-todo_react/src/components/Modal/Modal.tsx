import * as React from 'react';
import styles from './Modal.module.css';

export interface IAppProps {

}

function Modal (props: IAppProps) {
  return (
    <div id="modal">
      <div></div>
      <div>
        <h2>Texto modal</h2>
      </div>
    </div>
  );
}

export default Modal;