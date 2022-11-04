import React from 'react'
import styles from './workDetail.module.scss';

type Props = {
  link:string,
  years:string,
  star:string,
  remark:string,
  skills:string
}

const WorkDetail: React.FC<Props> = ({link,years,star,remark,skills}) => {
  return (
    <div className={styles.skillcard}>
      <div className={styles.workpic}>
        <img src={link} alt="Logo" className={styles.workimg}/>
      </div>
      <div className={styles.workde}>
        <div className={styles.skillfont}>URL</div>
        {years}
        <div className={styles.skillfont}>ソースコード</div>
        <span className={styles.star5_rating} data-rate={star}></span>
        <div className={styles.skillfont}>備考</div>
        {remark}
        <div className={styles.skillfont}>使用技術</div>
        {skills}
      </div>
    </div>
  );
};

export default WorkDetail