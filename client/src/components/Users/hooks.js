import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS } from './queries';
import { DELETE_USER } from './mutations';

export const useGetUsers = (defaultPage) => {
  const { loading, error, data, fetchMore } = useQuery(GET_USERS, {
    variables: {
      page: defaultPage,
    },
  });

  return { loading, error, data, fetchMore };
};

export const useDeleteUser = () => {
  const [deleteUser] = useMutation(DELETE_USER, {
    update(cache, { data }) {
      cache.evict({
        id: cache.identify({
          __typename: 'User',
          id: data.user.id,
        }),
      });
    },
  });
  return { deleteUser };
};
