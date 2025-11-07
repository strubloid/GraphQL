import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

// db mock
import db from "./_db"

const resolvers = {
    Query: {
        games: () => db.games,
        authors: () => db.authors,
        reviews: () => db.reviews,
    }
};
// server setup
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

/**
 games{
    title
 }
  
 */

// typedefs - definintions of types of data in the graph
// resolvers - functions that provide instructions for turning a GraphQL operation (a query, mutation, or subscription) into data.

// this starts the server 
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);