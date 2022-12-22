import React from 'react';
import styles from './skillCard.module.scss';
import IconWithLang from './iconWithLang';

//スキルの詳細が書かれたカード
//@param langName - 言語名
//@param years - 経験年数
//@param star - 習熟度
//@param remark - 備考
//@return スキルの詳細が書かれたカードが表示される

type Props = {
  langName:string;
  years:string;
  star:string;
  remark:string;
}

const SkillCard: React.FC<Props> = ({langName,years,star,remark}) => {
  return (
        <div className={styles.skill_card}>
          <div className={styles.skill_pic}>
            <IconWithLang langName={langName}/>
          </div>
          <div className={styles.skill_detail}>
            <div className={styles.skill_font}>経験年数</div>
            {years}
            <div className={styles.skill_font}>習熟度</div>
            <span className={styles.star5_rating} data-rate={star}></span>
            <div className={styles.skill_font}>備考</div>
            {remark}
          </div>
        </div>
  );
};

export default SkillCard