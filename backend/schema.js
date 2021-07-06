const { gql } = require('apollo-server');

const schema = gql`
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

module.exports = schema;
