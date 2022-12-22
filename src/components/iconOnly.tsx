import React from 'react'
import styles from './iconWithLang.module.scss';
import {IoLogoHtml5, IoLogoCss3} from "react-icons/io";
import {IoLogoVue, IoLogoPython} from "react-icons/io5"
import {SiJavascript, SiTypescript, SiReact, SiJquery, SiJava, SiPhp, SiFirebase, SiFlask, SiFastapi} from "react-icons/si"
import {FaGitAlt} from "react-icons/fa"
import { ActionIcon, Tooltip } from '@mantine/core'

type Props = {
    langName:string
}

const IconOnly: React.FC<Props> = ({langName}) => {

    return (
    <div className={styles.lang}>
      <Tooltip
        label={langName}
        color='dark'
        position='bottom'
        withArrow
      >
        <ActionIcon variant='default' color='dark'>
          { langName==="HTML" && <IoLogoHtml5 size={25}/>}
          { langName==="CSS" && <IoLogoCss3 size={25}/>}
          { langName==="JavaScript" && <SiJavascript size={25}/>}
          { langName==="TypeScript" && <SiTypescript size={25}/>}
          { langName==="React" && <SiReact size={25}/>}
          { langName==="Vue" && <IoLogoVue size={25}/>}
          { langName==="jQuery" && <SiJquery size={25}/>}
          { langName==="Python" && <IoLogoPython size={25}/>}
          { langName==="Flask" && <SiFlask size={25}/>}
          { langName==="FastAPI" && <SiFastapi size={25}/>}
          { langName==="Java" && <SiJava size={25}/>}
          { langName==="PHP" && <SiPhp size={25}/>}
          { langName==="Git" && <FaGitAlt size={25}/>}
          { langName==="Firebase" && <SiFirebase size={25}/>}
        </ActionIcon>
      </Tooltip>
    </div>
    );
};

export default IconOnly