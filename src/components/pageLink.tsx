import React from 'react'
import styles from './pageLink.module.scss';
import {FiExternalLink} from 'react-icons/fi'
type Props = {
  children:React.ReactNode,
  link:string,
}

const PageLink: React.FC<Props> = ({children,link}) => {
  return (
    <div style={{display:"flex"}}>
    <div>
      <FiExternalLink style={{position:"relative", top:"17px",right:"3px"}}size={15} color={`black`}/>
    </div>
    <p className={styles.linkde}>
      <a href={link}>{children}</a>
    </p>
    </div>
  );
};

export default PageLink