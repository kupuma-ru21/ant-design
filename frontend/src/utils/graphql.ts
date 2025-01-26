import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_SCHEMA_URL || "http://localhost:8080/query",
  cache: new InMemoryCache(),
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
