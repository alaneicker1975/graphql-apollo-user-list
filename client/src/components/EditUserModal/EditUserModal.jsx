import React from 'react';
import { Modal, Button } from '@atomikui/core';
import EditUserForm from '../EditUserForm';
import { useAppContext } from '../../context/AppContext';

const EditUserModal = () => {
  const { showEditModal, setShowEditModal } = useAppContext();

  return (
    <Modal
      disableOverlayclick
      isOpen={showEditModal}
      onClose={() => setShowEditModal(false)}
      title="Edit User"
      footer={
        <Button theme="blue" shape="pill" onClick={() => {}}>
          save changes
        </Button>
      }
    >
      <EditUserForm />
    </Modal>
  );
};

export default EditUserModal;
