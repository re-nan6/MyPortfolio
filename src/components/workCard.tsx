import React from 'react'
import styles from './workCard.module.scss';

//Workを表示するカード
//@param imgname - 表示する画像の名前
//@return 画像のカードが表示される
type Props = {
  imgname: string
}

const WorkCard: React.FC<Props> = (props) => {
  return (
    <div>
      <img src={ `${process.env.PUBLIC_URL}` + props.imgname} alt="Logo" className={styles.box}/>
    </div>
  );
};

export default WorkCard