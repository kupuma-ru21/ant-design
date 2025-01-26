import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { ENV } from "@/envConfig";

export const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_SCHEMA_URL || ENV.GRAPHQL_SCHEMA_URL,
  cache: new InMemoryCache(),
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
