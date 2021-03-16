import { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS } from './queries';
import { DELETE_USER } from './mutations';
import { useAppContext } from '../../context/AppContext';

export const useGetUsers = () => {
  const {
    currentPage,
    perPageLimit,
    setShowLoader,
    setTotalPages,
    setItemCount,
  } = useAppContext();

  const { loading, error, data } = useQuery(GET_USERS, {
    variables: {
      page: currentPage,
      limit: perPageLimit,
    },
  });

  useEffect(() => {
    if (!loading) {
      setItemCount(data.users.data.length);
      setTotalPages(data.users.total_pages);
    }
  }, [loading, data, setItemCount, setShowLoader, setTotalPages]);

  return { loading, error, data };
};

export const useDeleteUser = () => {
  const [deleteUser, { loading }] = useMutation(DELETE_USER, {
    update(cache, { data }) {
      cache.evict({
        id: cache.identify({
          __typename: 'User',
          id: data.user.id,
        }),
      });
    },
  });

  return { loading, deleteUser };
};
