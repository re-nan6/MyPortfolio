import React from 'react'
import styles from './iconWithLang.module.scss';
import {IoLogoHtml5, IoLogoCss3} from "react-icons/io";
import {IoLogoJavascript, IoLogoVue, IoLogoPython} from "react-icons/io5"
import {SiTypescript, SiReact, SiJquery, SiJava} from "react-icons/si"
type Props = {
    name:string
}

const IconWithLang: React.FC<Props> = (props) => {
    // let htmlFlag = false;
    // let cssFlag = false;
    // let jslFlag = false;
    // let tsFlag = false;
    // let reactFlag = false;
    // let vueFlag = false;
    // let jqFlag = false;

    return (
    <button className={styles.btn}>
    <div className={styles.lang}>
        { props.name==="HTML" && <IoLogoHtml5 size={120} color={'#ccc'} />}
        { props.name==="CSS" && <IoLogoCss3 size={120} color={'#ccc'} />}
        { props.name==="JavaScript" && <IoLogoJavascript size={120} color={'#ccc'} />}
        { props.name==="TypeScript" && <SiTypescript size={120} color={'#ccc'} />}
        { props.name==="React" && <SiReact size={120} color={'#ccc'} />}
        { props.name==="Vue" && <IoLogoVue size={120} color={'#ccc'} />}
        { props.name==="jQuery" && <SiJquery size={120} color={'#ccc'} />}
        { props.name==="Python" && <IoLogoPython size={120} color={'#ccc'} />}
        { props.name==="Java" && <SiJava size={120} color={'#ccc'} />}
        <div className={styles.text}>
            {props.name}
        </div>
    </div>
    </button>
    );
};

export default IconWithLang