import Modal from 'react-modal';
import React from 'react';
import s from './ImageModal.module.css';
import { ImageModalProps } from './ImageModal.types';

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({
  onCloseModal,
  modal,
  url,
}) => {
  return (
    <div>
      <Modal
        isOpen={modal}
        onRequestClose={onCloseModal}
        className={s.modal}
        overlayClassName={s.modalOverlay}
      >
        <img src={url}></img>
      </Modal>
    </div>
  );
};

export default ImageModal;
