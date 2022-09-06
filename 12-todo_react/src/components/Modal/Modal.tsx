import * as React from 'react';
import styles from './Modal.module.css';

export interface IAppProps {
  children: React.ReactNode; // significa que vai utilizar tsx no children
}

function Modal ({ children }: IAppProps) {
  return (
    <div id="modal">
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;