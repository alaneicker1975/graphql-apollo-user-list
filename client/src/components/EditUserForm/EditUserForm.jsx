import React, { useState, useEffect } from 'react';
import { FormField, Spinner, Overlay, Alert, Button } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';
import { useGetUser, useUpdateUser } from './hooks';

const EditUserForm = () => {
  const { editId } = useAppContext();

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const { loading, error, data } = useGetUser(editId);
  const { updateUser } = useUpdateUser();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    updateUser({ variables: { userData } });
    setUserData((prevState) => ({
      ...prevState,
      first_name: '',
      last_name: '',
      email: '',
      avatar: '',
    }));
  };

  useEffect(() => {
    if (!loading) {
      setUserData(data.user.data);
    }
  }, [loading, data]);

  if (error) {
    return <Alert theme="error">Error: Could not load form data</Alert>;
  }

  return (
    <>
      <form>
        {Object.keys(userData).map((key) =>
          !key.match(/(__typename|id)/) ? (
            <FormField
              key={key}
              className="margin-bottom-8"
              name={key}
              id={key}
              value={userData[key]}
              onChange={handleChange}
            />
          ) : null,
        )}
        <div className="margin-top-16">
          <Button theme="blue" shape="pill" onClick={handleSubmit}>
            save
          </Button>
        </div>
      </form>
      <Overlay className="modal-overlay" theme="white" isActive={loading}>
        <Spinner size="xlg" theme="blue" />
      </Overlay>
    </>
  );
};

export default EditUserForm;
