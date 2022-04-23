import { InMemoryCache } from "apollo-cache-inmemory";

export default function (context) {
  return {
    httpLinkOptions: {
      uri: "https://api.graphqli.com/secured/graphql",
      credentials: "same-origin",
    },
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer API_SECRET`,
    },
  };
}
