import React from 'react'
import styles from './awardFlame.module.scss';

//Awardで表示するカード
//@param children - カードの中身
//@return 黄色いカードが表示される

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