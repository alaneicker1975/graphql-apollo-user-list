import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../gql/mutations';

export default ({ onCompleted, onError }) => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  const [updateUser, { loading: updatingUser }] = useMutation(UPDATE_USER, {
    onCompleted,
    onError,
  });

  return { updateUser, updatingUser, userData, setUserData };
};
