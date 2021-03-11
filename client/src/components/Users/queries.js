import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users($page: Int!) {
    users(page: $page) {
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
