import React from 'react'
import styles from './iconWithName.module.scss';
import { Link as Scroll } from 'react-scroll';
import {AiFillCode} from "react-icons/ai"
import {FaUser, FaAward} from "react-icons/fa"
import {GiCardboardBoxClosed} from 'react-icons/gi'
import {IoIosMail} from 'react-icons/io'

//クリックすると特定の場所に飛ぶボタン
//@param refs - 遷移先の設定
//@return アイコンと名前が書かれたボタンが表示される

type Props = {
  refs:string
}

const IconWithName: React.FC<Props> = ({refs}) => {
  return (
    <div className={styles.box}>
      <Scroll className={styles.button} to={refs} smooth={true}>
        <div>
          { refs==="Profile" && <FaUser size={30} color={'#ccc'} />}
          { refs==="Skills" && <AiFillCode size={30} color={'#ccc'} />}
          { refs==="Works" && <GiCardboardBoxClosed size={30} color={'#ccc'} />}
          { refs==="Award" && <FaAward size={30} color={'#ccc'} />}
          { refs==="Contact" && <IoIosMail size={30} color={'#ccc'} />}
        </div>
        <div className={styles.text}>{refs}</div>
      </Scroll>
    </div>
  );
};

export default IconWithName