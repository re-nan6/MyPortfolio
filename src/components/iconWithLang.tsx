import React from 'react'
import styles from './iconWithLang.module.scss';
import {IoLogoHtml5} from "react-icons/io";
import { IconContext } from 'react-icons' //IconContextをインポート

type Props = {

  }

const IconWithLang: React.FC<Props> = () => {
    return (
    <div className={styles.lang}>   
        <IconContext.Provider value={{ color: '#ccc', size: '100px' }}>
            <IoLogoHtml5 />
        </IconContext.Provider>
        <div>
            HTML
        </div>
    </div> 
      
    );
  };
  
  export default IconWithLang