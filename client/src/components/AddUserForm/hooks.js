import { useState } from 'react';
import { useMutation } from '@apollo/client';

export const useAddUser = () => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });

  // const [addUser] = useMutation(ADD_USER);

  return { userData, setUserData };
};
