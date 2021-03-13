import React from 'react';
import { Modal } from '@atomikui/core';
import EditUserForm from '../EditUserForm';
import { useAppContext } from '../../context/AppContext';

const UserFormModal = () => {
  const { showEditModal, setShowEditModal } = useAppContext();

  return (
    <Modal
      disableOverlayclick
      isOpen={showEditModal}
      onClose={() => setShowEditModal(false)}
      title="Edit User"
    >
      <EditUserForm />
    </Modal>
  );
};

export default UserFormModal;
