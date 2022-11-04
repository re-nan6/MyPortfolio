import React from 'react'
import styles from './workModal.module.scss';
import ReactModal from 'react-modal';

type Props = {
  selectedItem:string
  work:string
  setSelectedItem:React.Dispatch<React.SetStateAction<string>>
  children:React.ReactNode
}

const WorkModal: React.FC<Props> = ({selectedItem,work,setSelectedItem,children}) => {
  return (
    <div>
      <ReactModal
        isOpen={selectedItem === work}
        onRequestClose={() => setSelectedItem('')}
        overlayClassName={{
          base: styles.overlay_base,
          afterOpen: styles.overlay_after,
          beforeClose: styles.overlay_before
        }}
        className={{
          base: styles.content_work_base,
          afterOpen: styles.content_work_after,
          beforeClose: styles.content_work_before
        }}
        closeTimeoutMS={400}
        >
        {children}
      </ReactModal>
    </div>
  );
};

export default WorkModal