import React from 'react';
import styles from './workDetail.module.scss';
import PageLink from './pageLink';
import IconOnly from './iconOnly';

//作品の詳細が書かれたカードの中身
//@param link - 作品画像のURL
//@param siteUrl - 作品のURL
//@param githubUrl - 作品のgithubのURL
//@param remark - 作品の備考
//@param skills - 作品に使用した技術一覧
//@return 作品の詳細が表示される

type Props = {
  link:string;
  siteUrl:string;
  githubUrl:string;
  remark:string;
  skills:Array<string>;
}

const WorkDetail: React.FC<Props> = ({link,siteUrl,githubUrl,remark,skills}) => {
  return (
    <div className={styles.skill_card}>
      <div className={styles.work_picture}>
        <img src={link} alt="Page" className={styles.work_image}/>
      </div>
      <div className={styles.work_detail}>
        <div className={styles.skill_font}>URL</div>
        <PageLink link={siteUrl}>サイトURL</PageLink>
        <div className={styles.skill_font}>ソースコード</div>
        <PageLink link={githubUrl}>サイトURL</PageLink>
        <div className={styles.skill_font}>備考</div>
        <div className={styles.remark}>{remark}</div>
        <div className={styles.skill_font}>使用技術</div>
        {skills.map((lang) =>
          <IconOnly langName={lang} key={lang}/>)}
      </div>
    </div>
  );
};

export default WorkDetail