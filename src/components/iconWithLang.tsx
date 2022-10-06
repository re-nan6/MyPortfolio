import React from 'react'
import styles from './iconWithLang.module.scss';
import {IoLogoHtml5, IoLogoCss3} from "react-icons/io";
import {IoLogoJavascript, IoLogoVue, IoLogoPython} from "react-icons/io5"
import {SiTypescript, SiReact, SiJquery, SiJava} from "react-icons/si"
type Props = {
    langName:string
    // modalBtnName: string;
    // modalClick: void;
}

const IconWithLang: React.FC<Props> = ({langName}) => {

    return (
    <div className={styles.lang}>
        { langName==="HTML" && <IoLogoHtml5 size={120} color={'#ccc'} />}
        { langName==="CSS" && <IoLogoCss3 size={120} color={'#ccc'} />}
        { langName==="JavaScript" && <IoLogoJavascript size={120} color={'#ccc'} />}
        { langName==="TypeScript" && <SiTypescript size={120} color={'#ccc'} />}
        { langName==="React" && <SiReact size={120} color={'#ccc'} />}
        { langName==="Vue" && <IoLogoVue size={120} color={'#ccc'} />}
        { langName==="jQuery" && <SiJquery size={120} color={'#ccc'} />}
        { langName==="Python" && <IoLogoPython size={120} color={'#ccc'} />}
        { langName==="Java" && <SiJava size={120} color={'#ccc'} />}
        <div className={styles.text}>
            {langName}
        </div>
    </div>
    );
};

export default IconWithLang