import React from 'react';
import styles from './workDetail.module.scss';
import PageLink from './pageLink';
import IconOnly from './iconOnly';
type Props = {
  link:string,
  siteUrl:string,
  githubUrl:string,
  remark:string,
  skills:Array<string>
}

const WorkDetail: React.FC<Props> = ({link,siteUrl,githubUrl,remark,skills}) => {
  return (
    <div className={styles.skillcard}>
      <div className={styles.workpic}>
        <img src={link} alt="Logo" className={styles.workimg}/>
      </div>
      <div className={styles.workde}>
        <div className={styles.skillfont}>URL</div>
        <PageLink link={siteUrl}>サイトURL</PageLink>
        <div className={styles.skillfont}>ソースコード</div>
        <PageLink link={githubUrl}>サイトURL</PageLink>
        <div className={styles.skillfont}>備考</div>
        <div className={styles.remark}>{remark}</div>
        <div className={styles.skillfont}>使用技術</div>
        {skills.map((lang) =>
          <IconOnly langName={lang}/>)}
      </div>
    </div>
  );
};

export default WorkDetail