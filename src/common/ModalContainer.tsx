import { observer } from "mobx-react-lite";
import React from "react";
import { Modal } from "semantic-ui-react";
import modalStore from "../stores/modalStore";

const ModalContainer = () => {
  const { modal, closeModal } = modalStore;
  return (
    <Modal open={modal.open} onClose={closeModal} size="mini">
      <Modal.Content>{modal.body}</Modal.Content>
    </Modal>
  );
};

export default observer(ModalContainer);
