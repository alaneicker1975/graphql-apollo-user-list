import { useFormik } from 'formik';

export default ({ validationSchema, initialValues, onSubmit }) => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (formData) => onSubmit({ variables: formData }),
  });

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
  };
};
