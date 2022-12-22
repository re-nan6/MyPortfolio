import React from 'react'
import styles from './pageLink.module.scss';
import {FiExternalLink} from 'react-icons/fi'

//他ページへ遷移するためのリンク付きテキスト
//@param children - リンクのタイトル・文章
//@param link - 遷移先のリンク
//@return ホバーすると色の変わるリンク付きテキストが表示される

type Props = {
  children:React.ReactNode,
  link:string,
}

const PageLink: React.FC<Props> = ({children,link}) => {
  return (
    <div style={{display:"inline-block"}}>
      <div style={{display:"flex"}}>
        <div>
          <FiExternalLink style={{position:"relative", top:"17px",right:"3px"}}size={15} color={`black`}/>
        </div>
        <p className={styles.linkde}>
          <a href={link} target="_blank" rel="noopener noreferrer">{children}</a>
        </p>
      </div>
    </div>
  );
};

export default PageLink