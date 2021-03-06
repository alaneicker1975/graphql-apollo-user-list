import React, { useEffect } from 'react';
import { FormField, Spinner, Overlay, Alert, Button } from '@atomikui/core';
import { useAppContext } from '../../context/AppContext';
import { validationSchema, initialValues } from './schema/updateUserForm';
import { useForm } from '../../hooks';
import { useUpdateUser } from './hooks';

const UpdateUserForm = () => {
  const { editId, setModal } = useAppContext();

  const { loading, error, data, updateUser, isUpdatingUser } = useUpdateUser({
    id: editId,
    onCompleted: () => setModal({ isOpen: false }),
    onError: () => setModal({ isOpen: false }),
  });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    setValues,
  } = useForm({
    onSubmit: updateUser,
    validationSchema,
    initialValues,
  });

  useEffect(() => {
    if (!loading) {
      setValues(data.user.data);
    }
  }, [loading, data, setValues]);

  if (error) {
    throw new Error(error);
  }

  return (
    <>
      <form autoComplete="off">
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
                onBlur={handleChange}
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
        isActive={loading || isUpdatingUser}
      >
        <Spinner size="xlg" theme="blue" />
      </Overlay>
    </>
  );
};

export default UpdateUserForm;
