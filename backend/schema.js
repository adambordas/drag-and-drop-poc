import { gql } from 'apollo-server';

const typeDefs = gql`
  type Card {
    id: ID!,
    description: String!
    lane: String!
  }

  type Query {
    cards: [Card]!
  }

  type Mutation {
    updateCard(id: ID!, lane: String!): Card
  }
`;

export default typeDefs;
