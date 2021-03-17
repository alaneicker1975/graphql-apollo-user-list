import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users($page: Int!, $limit: Int!) {
    users(page: $page, limit: $limit) {
      id
      page
      per_page
      total
      total_pages
      data {
        id
        first_name
        last_name
        email
        avatar
      }
    }
  }
`;
