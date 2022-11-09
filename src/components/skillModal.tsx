import React from 'react'
import styles from './skillModal.module.scss';
import ReactModal from 'react-modal';

//スキルの詳細を表示するためのモーダルウィンドウ
//@param selectedItem - どのスキルを選択したのか
//@param lang - そのスキルが設定されたモーダルウィンドウ
//@param setSelectedItem - 選択したスキルを変更するuseState
//@param children - 表示するスキルの詳細
//@return スキルの詳細が書かれたモーダルウィンドウ
type Props = {
  selectedItem:string
  lang:string
  setSelectedItem:React.Dispatch<React.SetStateAction<string>>
  children:React.ReactNode
}

const SkillModal: React.FC<Props> = ({selectedItem,lang,setSelectedItem,children}) => {
  return (
    <div>
      <ReactModal
        isOpen={selectedItem === lang}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: styles.overlay_base,
          afterOpen: styles.overlay_after,
          beforeClose: styles.overlay_before
        }}
        className={{
          base: styles.content_base,
          afterOpen: styles.content_after,
          beforeClose: styles.content_before
        }}
        closeTimeoutMS={400}
        >
        {children}
      </ReactModal>
    </div>
  );
};

export default SkillModal