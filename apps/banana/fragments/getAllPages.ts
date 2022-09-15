import gql from 'graphql-tag';

export const PageQuery = gql`
  query GetAllPages {
    pages {
      data {
        id
        Page: attributes {
          Name
          Title
          Slug
          Description
          locale
        }
      }
    }
  }
`;
