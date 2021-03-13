import React from 'react';
import { Modal } from '@atomikui/core';
import EditUserForm from '../EditUserForm';
import AddUserForm from '../AddUserForm';
import { useAppContext } from '../../context/AppContext';

const titles = {
  add: 'add user',
  edit: 'edit user',
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
      {modal.type === 'edit' && <EditUserForm />}
      {modal.type === 'add' && <AddUserForm />}
    </Modal>
  );
};

export default UserFormModal;
