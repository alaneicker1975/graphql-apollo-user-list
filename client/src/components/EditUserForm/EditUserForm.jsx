import React, { useEffect } from 'react';
import { FormField, Spinner, Overlay, Alert, Button } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';
import { useGetUser, useUpdateUser } from './hooks';

const EditUserForm = () => {
  const { editId } = useAppContext();

  const { loading, error, data } = useGetUser(editId);
  const { updateUser, updatingUser, userData, setUserData } = useUpdateUser();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    updateUser({ variables: userData });
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
      <form autoComplete="off">
        {Object.keys(userData).map(
          (key) =>
            !key.match(/(__typename|id)/) && (
              <FormField
                id={key}
                key={key}
                className="margin-bottom-8"
                name={key}
                label={key.replace('_', ' ')}
                defaultValue={userData[key]}
                onChange={handleChange}
              />
            ),
        )}
        <div className="margin-top-16">
          <Button theme="blue" shape="pill" onClick={handleSubmit}>
            save changes
          </Button>
        </div>
      </form>
      <Overlay
        className="is-modal-overlay"
        theme="white"
        isActive={loading || updatingUser}
      >
        <Spinner size="xlg" theme="blue" />
      </Overlay>
    </>
  );
};

export default EditUserForm;
