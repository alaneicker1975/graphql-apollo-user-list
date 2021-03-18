import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
});

export const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
};
