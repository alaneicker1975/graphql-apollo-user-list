import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from './queries';
import { UPDATE_USER } from './mutations';

export const useGetUser = (id) =>
  useQuery(GET_USER, {
    variables: { id },
  });

export const useUpdateUser = ({ onCompleted, onError }) => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const [updateUser, { loading: updatingUser }] = useMutation(UPDATE_USER, {
    onCompleted,
    onError,
  });

  return { updateUser, updatingUser, userData, setUserData };
};
