import { gql } from '@apollo/client';

export const getUsers = (page = 1) => gql`
  query Users {
    users(page: ${page}) {
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
