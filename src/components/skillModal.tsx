import React from 'react';
import { Modal } from '@mantine/core';

//スキルの詳細を表示するためのモーダルウィンドウ
//@param selectedItem - どのスキルを選択したのか
//@param lang - そのスキルが設定されたモーダルウィンドウ
//@param setSelectedItem - 選択したスキルを変更するuseState
//@param children - 表示するスキルの詳細
//@return スキルの詳細が書かれたモーダルウィンドウ

type Props = {
  selectedItem:string;
  lang:string;
  setSelectedItem:React.Dispatch<React.SetStateAction<string>>;
  children:React.ReactNode;
}

const SkillModal: React.FC<Props> = ({selectedItem,lang,setSelectedItem,children}) => {
  return (
    <div>
      <Modal
        opened={selectedItem === lang}
        onClose={() => setSelectedItem('')}
      >
        {children}
      </Modal>
    </div>
  );
};

export default SkillModal