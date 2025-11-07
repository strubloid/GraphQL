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
      
   }
   type Author{
      id: ID!,
      name: String!,
      verified: Boolean!,
   }
   type Query {
      reviews: [Review!]!
      games: [Game!]!
      authors: [Author!]!

      getGame(id: ID!): Game
      getReview(id: ID!): Review
      getAuthor(id: ID!): Author
   }
`;
