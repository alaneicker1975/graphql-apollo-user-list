import React from 'react';
import { Modal, Button, FormField } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';

const EditUserModal = () => {
  const { showEditModal, setShowEditModal } = useAppContext();

  return (
    <Modal
      isOpen={showEditModal}
      onClose={() => setShowEditModal(false)}
      title="Edit User"
      footer={
        <Button theme="blue" shape="pill" onClick={() => {}}>
          save changes
        </Button>
      }
    >
      <form>
        <FormField className="margin-bottom-8" label="First Name" />
        <FormField className="margin-bottom-8" label="Last Name" />
        <FormField className="margin-bottom-8" label="Email Address" />
        <FormField label="Avatar URL" />
      </form>
    </Modal>
  );
};

export default EditUserModal;
