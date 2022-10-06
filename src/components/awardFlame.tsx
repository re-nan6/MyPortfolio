import React from 'react'
import styles from './awardFlame.module.scss';

type Props = {
  children:React.ReactNode
}

const AwardFlame: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.flame}>
      {children}
    </div>
  );
};

export default AwardFlame