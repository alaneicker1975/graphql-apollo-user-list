import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from './queries';
import { UPDATE_USER } from './mutations';

export const useGetUser = (editId) =>
  useQuery(GET_USER, {
    variables: {
      id: editId,
    },
  });

export const useUpdateUser = () => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const [updateUser] = useMutation(UPDATE_USER);
  return { updateUser, userData, setUserData };
};
