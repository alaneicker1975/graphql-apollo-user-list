import { useQuery } from '@apollo/client';
import { GET_USER } from '../gql/queries';

export default (id) =>
  useQuery(GET_USER, {
    variables: { id },
  });
