import { gql } from '@apollo/client';

export const getUsers = () => gql`
  query Users {
    users {
      page
      per_page
      total
      total_pages
      data {
        first_name
        last_name
        email
        avatar
      }
    }
  }
`;
