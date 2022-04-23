# nuxtjs-postgres-graphql

> Boilerplate to get started with Nuxt.js, Graphqli engine as CMS using the [create-nuxt-app](https://nuxtjs.org/guide/installation) and [@nuxtjs/apollo](https://github.com/nuxt-community/apollo-module) module.

# Tutorial

- Clone this repo:
  ```bash
  git clone https://github.com/graphqli/nuxtjs-graphqli-todo-app.git
  cd nuxtjs-graphqli-todo-app
  ```

- Install npm modules:
  ```bash
  npm install
  ```

- Open `apollo/clientConfig.js` and configure Graphqli's GraphQL Endpoint as follows: 
  ```js

    import { InMemoryCache } from "apollo-cache-inmemory";
    export default function(context){
      return {
            httpLinkOptions: {
                uri: 'https://api.graphqli.com/secured/graphql',
                credentials: 'same-origin'
            },
            cache: new InMemoryCache(),
      }
    }
  ```

- We have defined the graphql query in `apollo/queries/fetchAuthor.gql`. 
    - GraphQL query

    ```graphql

    query {
      author {
        id
        name
      }
    }

    ```

    - In `pages/index.vue`, we import author query.
    ```js

    <script>
    import author from '~/apollo/queries/fetchAuthor'

    export default {
      apollo: {
        author: {
          prefetch: true,
          query: author
        }
      },
      head: {
        title: 'Authors of Blog'
      }
    }
    </script>

    ```


- Run the app:
  ```bash
  npm run dev
  ```
- Test the app
  Visit [http://localhost:3000](http://localhost:3000) to view the app

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
