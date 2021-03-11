import React, { useState, useEffect } from 'react';
import { FormField, Spinner, Overlay, Alert } from '@atomikui/core';
import { useQuery } from '@apollo/client';
import { useAppContext } from '../../context/AppContext';
import { GET_USER } from './queries';

const EditUserForm = () => {
  const { editId } = useAppContext();

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: editId,
    },
  });

  useEffect(() => {
    if (!loading) {
      setUserData(data.user.data);
    }
  }, [loading, data]);

  if (error) {
    return <Alert theme="error">Error: Could not load user data</Alert>;
  }

  return (
    <>
      <form>
        <FormField
          className="margin-bottom-8"
          label="First Name"
          value={userData.first_name}
        />
        <FormField
          className="margin-bottom-8"
          label="Last Name"
          value={userData.last_name}
        />
        <FormField
          className="margin-bottom-8"
          label="Email Address"
          value={userData.email}
        />
        <FormField label="Avatar URL" value={userData.avatar} />
      </form>
      <Overlay className="modal-overlay" theme="white" isActive={loading}>
        <Spinner size="xlg" theme="blue" />
      </Overlay>
    </>
  );
};

export default EditUserForm;
