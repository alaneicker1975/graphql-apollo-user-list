import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS } from './queries';
import { DELETE_USER } from './mutations';
import { useAppContext } from '../../context/AppContext';

export const useGetUsers = () => {
  const { currentPage, perPageLimit } = useAppContext();

  const { loading, error, data, fetchMore } = useQuery(GET_USERS, {
    variables: {
      page: currentPage,
      limit: perPageLimit,
    },
  });

  return { loading, error, data, fetchMore };
};

export const useDeleteUser = () => {
  const [deleteUser, { loading: deleteInProgress }] = useMutation(DELETE_USER, {
    // refetchQueries: [{ query: GET_USERS, variables: { page: 1 } }],
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
