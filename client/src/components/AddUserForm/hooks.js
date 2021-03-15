import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from './mutations';
import { GET_USERS } from '../Users/queries';

export const useAddUser = () => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const [addUser] = useMutation(ADD_USER, {
    update: (cache, { data: { user } }) => {
      const { users } = cache.readQuery({ query: GET_USERS });
      users.data = [...users.data, user];
      cache.writeQuery({ query: GET_USERS }, users);
    },
  });

  return { addUser, userData, setUserData };
};
