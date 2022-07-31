import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl4pz7yzi2lv101xsego8h0jn/master',
  cache: new InMemoryCache()
})