import React from 'react';
import { Modal } from '@atomikui/core';
import UpdateUserForm from '../UpdateUserForm';
import AddUserForm from '../AddUserForm';
import { useAppContext } from '../../context/AppContext';

const titles = {
  add: 'add user',
  update: 'update user',
};

const UserFormModal = () => {
  const { modal, setModal } = useAppContext();

  return (
    <Modal
      disableOverlayclick
      isOpen={modal.isOpen}
      onClose={() => setModal({ show: false })}
      title={titles[modal.type]}
    >
      {modal.type === 'update' && <UpdateUserForm />}
      {modal.type === 'add' && <AddUserForm />}
    </Modal>
  );
};

export default UserFormModal;
