import { gql } from '@apollo/client';

export const getPosts = () => gql`
  query Posts {
    posts {
      id
      userId
      title
      body
    }
  }
`;
