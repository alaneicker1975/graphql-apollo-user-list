import React from 'react';
import { FormField, Button, Overlay, Spinner } from '@atomikui/core';
import { useAddUser } from './hooks';
import { useForm } from '../../hooks';
import { validationSchema, initialValues } from './schema/addUserForm';
import { useAppContext } from '../../context/AppContext';

const AddUserForm = () => {
  const { setModal } = useAppContext();

  const { addUser, isSavingUser } = useAddUser({
    onCompleted: () => setModal({ isOpen: false }),
    onError: () => setModal({ isOpen: false }),
  });

  const { handleSubmit, handleChange, values, errors, touched } = useForm({
    onSubmit: addUser,
    validationSchema,
    initialValues,
  });

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate>
        {Object.keys(values).map(
          (key) =>
            !key.match(/(__typename|id)/) && (
              <FormField
                id={key}
                key={key}
                className="margin-bottom-8"
                name={key}
                label={key.replace('_', ' ')}
                defaultValue={values[key]}
                hasError={!!(errors[key] && touched[key])}
                errorText={errors[key]}
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
      <Overlay
        className="is-modal-overlay"
        theme="white"
        isActive={isSavingUser}
      >
        <Spinner size="xlg" theme="blue" />
      </Overlay>
    </>
  );
};

export default AddUserForm;
