/*
So this file is the main file where all the requests are coming
 */
import express from "express";
// import bodyParser from "body-parser";
import { ApolloServer, gql } from "apollo-server-express";

import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

const PORT = 8080;

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:8080${server.graphqlPath}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
