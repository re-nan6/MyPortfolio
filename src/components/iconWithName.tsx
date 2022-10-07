import React from 'react'
import styles from './iconWithName.module.scss';
import { Link as Scroll } from 'react-scroll';
import {FaUser, FaAward} from "react-icons/fa"
import {AiFillCode} from "react-icons/ai"
import {GiCardboardBoxClosed} from 'react-icons/gi'
import {IoIosMail} from 'react-icons/io'

type Props = {
  refs:string
}

const IconWithName: React.FC<Props> = (props) => {
  return (
    <div className={styles.box}>
      <Scroll className={styles.button} to={props.refs} smooth={true}>
        <div>
          { props.refs==="Profile" && <FaUser size={30} color={'#ccc'} />}
          { props.refs==="Skills" && <AiFillCode size={30} color={'#ccc'} />}
          { props.refs==="Works" && <GiCardboardBoxClosed size={30} color={'#ccc'} />}
          { props.refs==="Award" && <FaAward size={30} color={'#ccc'} />}
          { props.refs==="Contact" && <IoIosMail size={30} color={'#ccc'} />}
        </div>
        <div className={styles.text}>{props.refs}</div>
      </Scroll>
    </div>
  );
};

export default IconWithName