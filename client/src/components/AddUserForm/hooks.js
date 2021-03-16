import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from './mutations';
import { GET_USERS } from '../Users/queries';
import { useAppContext } from '../../context/AppContext';

export const useAddUser = () => {
  const {
    currentPage,
    totalPages,
    perPageLimit,
    itemCount,
    setCurrentPage,
    setModal,
  } = useAppContext();

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const [addUser, { loading: savingUser }] = useMutation(ADD_USER, {
    onCompleted: () => setModal({ isOpen: false }),
    onError: () => setModal({ isOpen: false }),
    update: (cache, { data: { user } }) => {
      let nextPage;

      if (itemCount === perPageLimit) {
        nextPage = currentPage + (totalPages - currentPage);
        setCurrentPage(nextPage);
      }

      const query = GET_USERS;

      const variables = { page: nextPage || currentPage, limit: perPageLimit };
      const data = cache.readQuery({ query, variables });

      const newData = {
        users: { ...data.users, data: [...data.users.data, user.data] },
      };

      cache.writeQuery({ query, variables, data: newData });
    },
  });

  return { addUser, savingUser, userData, setUserData };
};
