import { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useAppContext } from '../../context/AppContext';
import { GET_USERS } from './queries';
import { DELETE_USER } from './mutations';

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
  const {
    itemCount,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useAppContext();

  const [deleteUser, { loading: deletingUser }] = useMutation(DELETE_USER, {
    update(cache, { data }) {
      cache.evict({
        id: cache.identify({
          __typename: 'User',
          id: data.user.id,
        }),
      });

      if (itemCount === 1) {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);

        Array.from(Array(totalPages).keys()).forEach((id) => {
          cache.modify({
            id: cache.identify({
              __typename: 'AllUsers',
              id,
            }),
            fields: {
              total_pages() {
                return prevPage;
              },
            },
          });
        });
      }
    },
  });

  return { deletingUser, deleteUser };
};
