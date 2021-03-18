import { useFormik } from 'formik';

export const useForm = ({ validationSchema, initialValues, onSubmit }) => {
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
