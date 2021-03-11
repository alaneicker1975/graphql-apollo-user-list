import { useQuery, useMutation } from '@apollo/client';
import { GET_USER, UPDATE_USER } from './queries';

export const useGetUser = (editId) =>
  useQuery(GET_USER, {
    variables: {
      id: editId,
    },
  });

export const useUpdateUser = () => {
  const [updateUser, { data }] = useMutation(UPDATE_USER);
  return { updateUser };
};
