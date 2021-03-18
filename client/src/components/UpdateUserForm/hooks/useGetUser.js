import { useQuery } from '@apollo/client';
import { GET_USER } from '../gql';

export default (id) =>
  useQuery(GET_USER, {
    variables: { id },
  });
