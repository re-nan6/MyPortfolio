import React from 'react'
import styles from './iconWithName.module.scss';

type Props = {
  name: string
}

const IconWithName: React.FC<Props> = (props) => {
  let classname = ""
  let refs = ""
  let url = ""
  if (props.name === "Home"){
    classname = "iconHome"
    refs = "home"
    url = "../images/home_black_24dp.svg"
  }else if (props.name === "Profile"){
    classname = "button pro"
    refs = "home"
    url = "../images/icon_trash_can.svg"
  }else if (props.name === "Works"){
    classname = "button work"
    refs = "home"
    url = "../images/icon_trash_can.svg"
  }else{
    classname = "button con"
    refs = "home"
    url = "../images/icon_trash_can.svg"
  }
  return (
    <div>
      <a href={refs} className={styles.button}>
        <span className={styles[classname]}></span>
        <span className={styles.s}>{props.name}</span>
      </a>
    </div>
  );
};

export default IconWithName