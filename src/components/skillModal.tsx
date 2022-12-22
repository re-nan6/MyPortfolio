import React from 'react'
import { Modal } from '@mantine/core';

type Props = {
  selectedItem:string
  lang:string
  setSelectedItem:React.Dispatch<React.SetStateAction<string>>
  children:React.ReactNode
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