import React from 'react'
import styles from './workCard.module.scss';

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