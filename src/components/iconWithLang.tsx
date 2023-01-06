import React from 'react';
import styles from './iconWithLang.module.scss';
import {FaGitAlt, FaDocker} from "react-icons/fa";
import {IoLogoHtml5, IoLogoCss3} from "react-icons/io";
import {IoLogoVue, IoLogoPython} from "react-icons/io5";
import {SiJavascript, SiTypescript, SiReact, SiJquery, SiJava, SiPhp, SiFirebase, SiFlask, SiFastapi} from "react-icons/si";

//言語のアイコンと言語名を表示するカード
//@param langName - 表示する言語名
//@return 言語のアイコンと言語名が表示される

type Props = {
    langName:string;
}

const IconWithLang: React.FC<Props> = ({langName}) => {

    return (
    <div className={styles.lang}>
        { langName==="HTML" && <IoLogoHtml5 size={130} color={'#ccc'} />}
        { langName==="CSS" && <IoLogoCss3 size={130} color={'#ccc'} />}
        { langName==="JavaScript" && <SiJavascript size={130} color={'#ccc'} />}
        { langName==="TypeScript" && <SiTypescript size={130} color={'#ccc'} />}
        { langName==="React" && <SiReact size={130} color={'#ccc'} />}
        { langName==="Vue" && <IoLogoVue size={130} color={'#ccc'} />}
        { langName==="jQuery" && <SiJquery size={130} color={'#ccc'} />}
        { langName==="Python" && <IoLogoPython size={130} color={'#ccc'} />}
        { langName==="Flask" && <SiFlask size={130} color={'#ccc'} />}
        { langName==="FastAPI" && <SiFastapi size={130} color={'#ccc'} />}
        { langName==="Java" && <SiJava size={130} color={'#ccc'} />}
        { langName==="PHP" && <SiPhp size={130} color={'#ccc'} />}
        { langName==="Git" && <FaGitAlt size={130} color={'#ccc'} />}
        { langName==="Docker" && <FaDocker size={130} color={'#ccc'} />}
        { langName==="Firebase" && <SiFirebase size={130} color={'#ccc'} />}
        <div className={styles.text}>
            {langName}
        </div>
    </div>
    );
};

export default IconWithLang