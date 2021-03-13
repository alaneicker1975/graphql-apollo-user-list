import React from 'react';
import { FormField, Button } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';
import { useAddUser } from './hooks';

const AddUserForm = () => {
  const { setShowAddForm } = useAppContext();
  const { userData, setUserData } = useAddUser();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // addUser({ variables: userData });
    // setModal(false);
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
                value={userData[key]}
                onChange={handleChange}
              />
            ),
        )}
        <div className="margin-top-16">
          <Button theme="blue" shape="pill" onClick={handleSubmit}>
            save
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddUserForm;
