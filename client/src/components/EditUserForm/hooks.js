import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from './queries';
import { UPDATE_USER } from './mutations';
import { useAppContext } from '../../context/AppContext';

export const useGetUser = (editId) =>
  useQuery(GET_USER, {
    variables: {
      id: editId,
    },
  });

export const useUpdateUser = () => {
  const { setModal } = useAppContext();

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const [updateUser, { loading: updatingUser }] = useMutation(UPDATE_USER, {
    onCompleted: () => setModal({ isOpen: false }),
    onError: () => setModal({ isOpen: false }),
  });

  return { updateUser, updatingUser, userData, setUserData };
};
