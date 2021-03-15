import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from './mutations';
import { GET_USERS } from '../Users/queries';
import { useAppContext } from '../../context/AppContext';

import { client } from '../App';

export const useAddUser = () => {
  const { currentPage, perPageLimit, itemCount } = useAppContext();

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const [addUser] = useMutation(ADD_USER, {
    ...(itemCount < 6 && {
      update: (cache, { data: { user } }) => {
        const query = GET_USERS;
        const variables = { page: currentPage, limit: perPageLimit };

        const data = cache.readQuery({ query, variables });

        const newData = {
          users: { ...data.users, data: [...data.users.data, user.data] },
        };

        cache.writeQuery({ query, variables, data: newData });
      },
    }),
  });

  // If current page already has sixe items, clear the
  // cache so new item shows up when going to next page.
  if (itemCount === perPageLimit) {
    client.cache.reset();
  }

  return { addUser, userData, setUserData };
};
