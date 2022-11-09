import React from 'react'
import styles from './skillCard.module.scss';
import IconWithLang from './iconWithLang';

//スキルの詳細が書かれたカード
//@param langName - 言語名
//@param years - 経験年数
//@param star - 習熟度
//@param remark - 備考
//@return スキルの詳細が書かれたカードが表示される

type Props = {
  langName:string,
  years:string,
  star:string,
  remark:string,
}

const SkillCard: React.FC<Props> = ({langName,years,star,remark}) => {
  return (
        <div className={styles.skillcard}>
          <div className={styles.skillpic}>
            <IconWithLang langName={langName}/>
          </div>
          <div className={styles.skillde}>
            <div className={styles.skillfont}>経験年数</div>
            {years}
            <div className={styles.skillfont}>習熟度</div>
            <span className={styles.star5_rating} data-rate={star}></span>
            <div className={styles.skillfont}>備考</div>
            {remark}
          </div>
        </div>
  );
};

export default SkillCard