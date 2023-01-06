import React from 'react';
import styles from './workCard.module.scss';

//Workを表示するカード
//@param imageName - 表示する画像の名前
//@return 画像のカードが表示される

type Props = {
  imageName: string;
}

const WorkCard: React.FC<Props> = ({imageName}) => {
  return (
    <div>
      <img src={ `${process.env.PUBLIC_URL}` + imageName} alt="Page" className={styles.box}/>
    </div>
  );
};

export default WorkCard