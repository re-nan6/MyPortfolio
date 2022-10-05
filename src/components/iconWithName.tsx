import React from 'react'
import styles from './iconWithName.module.scss';

type Props = {
  name: string
}

const IconWithName: React.FC<Props> = (props) => {
  let classname = ""
  let refs = ""
  if (props.name === "Home"){
    classname = "iconHome"
    refs = "home"
  }else if (props.name === "Profile"){
    classname = "button pro"
    refs = "profile"
  }else if (props.name === "Works"){
    classname = "button work"
    refs = "works"
  }else{
    classname = "button con"
    refs = "contact"
  }
  return (
    <div className={styles.box}>
      <a href={refs} className={styles.button}>
        <span className={styles[classname]}></span>
        <span className={styles.text}>{props.name}</span>
      </a>
    </div>
  );
};

export default IconWithName