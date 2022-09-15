import { ApolloClient, InMemoryCache } from '@apollo/client';

/**
 * @todo
 * Restrict the admin secret for only reading data publish with the adequate permission.
 */

export const client = new ApolloClient({
  uri: process.env.GRAPHQL_API_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.SECRET_ADMIN_TOKEN_API}`,
  },
});
