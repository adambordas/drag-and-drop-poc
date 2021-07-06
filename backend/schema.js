import { gql } from 'apollo-server';

const typeDefs = gql`
  type Card {
    id: ID!,
    description: String!
  }

  type Query {
    cards: [Card]!
  }

  type Mutation {
    updateCard(id: ID!): Card
  }
`;

export default typeDefs;
