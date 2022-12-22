import React from 'react'
import { Modal } from '@mantine/core';

type Props = {
  selectedItem:string
  work:string
  setSelectedItem:React.Dispatch<React.SetStateAction<string>>
  title:string
  children:React.ReactNode
}

const WorkModal: React.FC<Props> = ({selectedItem,work,setSelectedItem,title,children}) => {
  return (
    <div>
      <Modal
        opened={selectedItem === work}
        onClose={() => setSelectedItem('')}
        title={title}
      >
        {children}
      </Modal>
    </div>
  );
};

export default WorkModal