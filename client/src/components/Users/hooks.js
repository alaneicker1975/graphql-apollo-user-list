import { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS } from './queries';
import { DELETE_USER } from './mutations';
import { useAppContext } from '../../context/AppContext';

export const useGetUsers = () => {
  const {
    currentPage,
    perPageLimit,
    totalPages,
    setTotalPages,
  } = useAppContext();

  const { loading, error, data } = useQuery(GET_USERS, {
    variables: {
      page: currentPage,
      limit: perPageLimit,
    },
  });

  useEffect(() => {
    if (!loading) {
      setTotalPages(data.users.total_pages);
    }
  }, [loading, data, setTotalPages]);

  return { loading, error, data };
};

export const useDeleteUser = () => {
  const [deleteUser, { loading: deleteInProgress }] = useMutation(DELETE_USER, {
    update(cache, { data }) {
      cache.evict({
        id: cache.identify({
          __typename: 'User',
          id: data.user.id,
        }),
      });
    },
  });

  return { deleteUser, deleteInProgress };
};
