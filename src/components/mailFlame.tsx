import React from 'react'
import styles from './mailFlame.module.scss';

type Props = {
  children:React.ReactNode,
}

const MailFlame: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.clip}>
      {children}
    </div>
  );
};

export default MailFlame