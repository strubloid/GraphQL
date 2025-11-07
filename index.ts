import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

// db mock
import db from "./_db"

const resolvers = {
    Query: {
        games: () => db.games,
        game: (_: any, args: { id: string }) => {
            return db.games.find(game => game.id === args.id)
        },

        authors: () => db.authors,
        author: (_: any, args: { id: string }) => {
            return db.authors.find(author => author.id === args.id)
        },

        reviews: () => db.reviews,
        review(_: any, args: { id: string }) {
            return db.reviews.find(review => review.id === args.id)
        }
    },
    Game: {
        reviews: (parent: { id: string }) => {
            return db.reviews.filter(review => review.gameId === parent.id)
        }
    },
    Author: {
        reviews: (parent: { id: string }) => {
            return db.reviews.filter(review => review.authorId === parent.id)
        }
    },
    Review: {
        game: (parent: { gameId: string }) => {
            return db.games.find(game => game.id === parent.gameId)
        },
        author: (parent: { authorId: string }) => {
            return db.authors.find(author => author.id === parent.authorId)
        }
    },
    Mutation: {
        deleteGame: (_: any, args: { id: string }) => {
            return db.games.filter((game) => game.id !== args.id)
        },
        addGame: (_: any, args: { id: string }) => {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.games.push(game);

            return game;
        }
    }
};
// server setup
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

/**
 query GameQuery($id: ID!){
    game(id: $id) {
        title,
        reviews {
            raiting,
            content
        }
    }
 }
  
 */

// typedefs - definintions of types of data in the graph
// resolvers - functions that provide instructions for turning a GraphQL operation (a query, mutation, or subscription) into data.

// this starts the server 
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);