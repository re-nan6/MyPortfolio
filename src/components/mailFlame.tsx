import React from 'react';
import styles from './mailFlame.module.scss';

//連絡先の書いてあるカード
//@param children - 連絡先
//@return 連絡先の書いてあるカードを表示する

type Props = {
  children:React.ReactNode;
}

const MailFlame: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.clip}>
      {children}
    </div>
  );
};

export default MailFlame