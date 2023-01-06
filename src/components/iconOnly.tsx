import React from 'react';
import styles from './iconOnly.module.scss';
import {IoLogoHtml5, IoLogoCss3} from "react-icons/io";
import {IoLogoVue, IoLogoPython} from "react-icons/io5";
import {SiJavascript, SiTypescript, SiReact, SiJquery, SiJava, SiPhp, SiFirebase, SiFlask, SiFastapi} from "react-icons/si";
import {FaGitAlt, FaDocker} from "react-icons/fa";
import { ActionIcon, Tooltip } from '@mantine/core';

//アイコン単体を表示するためのコンポーネント
//@param langName - 表示するプログラミング言語
//@return プログラミング言語のアイコンが表示される

type Props = {
    langName:string;
}

const IconOnly: React.FC<Props> = ({langName}) => {

    return (
    <div className={styles.icon}>
      <Tooltip
        label={langName}
        color='dark'
        position='bottom'
        withArrow
      >
        <ActionIcon variant='default' color='dark'>
          { langName==="HTML" && <IoLogoHtml5 size={26}/>}
          { langName==="CSS" && <IoLogoCss3 size={26}/>}
          { langName==="JavaScript" && <SiJavascript size={26}/>}
          { langName==="TypeScript" && <SiTypescript size={26}/>}
          { langName==="React" && <SiReact size={26}/>}
          { langName==="Vue" && <IoLogoVue size={26}/>}
          { langName==="jQuery" && <SiJquery size={26}/>}
          { langName==="Python" && <IoLogoPython size={26}/>}
          { langName==="Flask" && <SiFlask size={26}/>}
          { langName==="FastAPI" && <SiFastapi size={26}/>}
          { langName==="Java" && <SiJava size={26}/>}
          { langName==="PHP" && <SiPhp size={26}/>}
          { langName==="Git" && <FaGitAlt size={26}/>}
          { langName==="Docker" && <FaDocker size={26}/>}
          { langName==="Firebase" && <SiFirebase size={26}/>}
        </ActionIcon>
      </Tooltip>
    </div>
    );
};

export default IconOnly