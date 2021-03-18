import { useMutation } from '@apollo/client';
import { ADD_USER } from '../mutations';
import { GET_USERS } from '../../Users/queries';
import { useAppContext } from '../../../context/AppContext';

export const useAddUser = ({ onCompleted, onError }) => {
  const {
    currentPage,
    totalPages,
    perPageLimit,
    itemCount,
    setCurrentPage,
  } = useAppContext();

  const [addUser, { loading: savingUser }] = useMutation(ADD_USER, {
    onCompleted,
    onError,
    update: (cache, { data: { user } }) => {
      let nextPage;

      if (itemCount === perPageLimit) {
        nextPage = totalPages + 1;
        setCurrentPage(nextPage);

        Array.from(Array(nextPage).keys()).forEach((id) => {
          cache.modify({
            id: cache.identify({
              __typename: 'AllUsers',
              id,
            }),
            fields: {
              total_pages() {
                return nextPage;
              },
            },
          });
        });
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

  return { addUser, savingUser };
};
