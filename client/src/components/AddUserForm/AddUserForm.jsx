import React from 'react';
import { FormField, Button, Overlay, Spinner } from '@atomikui/core';
import { useAddUser } from './hooks';

const AddUserForm = () => {
  const { addUser, savingUser, userData, setUserData } = useAddUser();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    addUser({ variables: userData });
  };

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
            save user
          </Button>
        </div>
      </form>
      <Overlay className="is-modal-overlay" theme="white" isActive={savingUser}>
        <Spinner size="xlg" theme="blue" />
      </Overlay>
    </>
  );
};

export default AddUserForm;
