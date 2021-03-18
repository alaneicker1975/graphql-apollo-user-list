import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../gql';
import { useGetUser } from '.';

export default ({ id, onCompleted, onError }) => {
  const { loading, error, data } = useGetUser(id);

  const [updateUser, { loading: isUpdatingUser }] = useMutation(UPDATE_USER, {
    onCompleted,
    onError,
  });

  return { loading, error, data, updateUser, isUpdatingUser };
};
