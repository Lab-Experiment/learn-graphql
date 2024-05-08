/**
 * GraphQL is what we asked that what we get.
 * Input query and output will be the same as the query.
 * References:
 * - https://graphql.org/graphql-js/running-an-express-graphql-server/
 */

var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var { buildSchema } = require("graphql");
var { ruruHTML } = require("ruru/server");
const { staticDatabase } = require("./data");

const app = express();
const port = 3000;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    type User {
      id: ID!
      name: String
      email: String
    }

    type Query {
      users: [User] # Mengembalikan array pengguna
      user(id: ID!): User
    }

    type Mutation {
      createUser(name: String!, email: String!): User
    }
`);

// The root provides a resolver function for each API endpoint
var root = {
  users: () => staticDatabase.users,
  user: ({ id }) => staticDatabase.users.find((user) => user.id === id),
  createUser: ({ name, email }) => {
    const newUser = {
      id: faker.allFakers.id_ID.string.uuid(),
      name,
      email,
    };
    staticDatabase.users.push(newUser);
    return newUser;
  },
};

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

// app.use(express.urlencoded({ extended: true }));

// ruruHTML is for rendering the HTML form for GraphQL query testing.
app.get("/", (_req, res) => {
  /**
   * example query
    query {
        user(id: "cfb04596-52ca-41c5-a901-3944b7790e37") {
          id
          name
          email
        }
        users {
          id
          name
          email
        }
    }
     */
  res.type("html");
  res.end(
    ruruHTML({
      endpoint: "/graphql",
    })
  );
});

app.listen(port, () => {
  console.log(`Listening on http://[::1]:${port}/`);
});
