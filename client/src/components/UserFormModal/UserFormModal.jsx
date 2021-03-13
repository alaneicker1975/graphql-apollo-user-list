import React from 'react';
import { Modal } from '@atomikui/core';
import EditUserForm from '../EditUserForm';
import { useAppContext } from '../../context/AppContext';

const UserFormModal = () => {
  const { showModal, setShowModal } = useAppContext();

  return (
    <Modal
      disableOverlayclick
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      title="Edit User"
    >
      <EditUserForm />
    </Modal>
  );
};

export default UserFormModal;
