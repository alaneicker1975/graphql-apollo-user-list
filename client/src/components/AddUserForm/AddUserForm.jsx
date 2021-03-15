import React from 'react';
import { FormField, Button } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';
import { useAddUser } from './hooks';

const AddUserForm = () => {
  const { setModal } = useAppContext();
  const { addUser, userData, setUserData } = useAddUser();

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
    setModal({ isOpen: false });
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
    </>
  );
};

export default AddUserForm;
