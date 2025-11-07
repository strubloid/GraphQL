/**
 * For this case we can have the most used types:
 * int, float, string, boolean, ID
 * to make a collection you must use [], like cars: [String]
 * to make a type required you must use !, like id: ID!
 */
export const typeDefs = `#graphql 
   type Game{
      id: ID!,
      title: String!,  
      platform: [String!]!,
   }
   type Review{
      id: ID!,
      rating: Float!,
      content: String!,
      gameId: ID!,
      authorId: ID!,
      
   }
   type Author{
      id: ID!,
      name: String!,
      verified: Boolean!,
   }
   type Query {
      reviews: [Review!]!
      review(id: ID!): Review
      games: [Game!]!
      game(id: ID!): Game
      authors: [Author!]!
      author(id: ID!): Author
   }
`;
