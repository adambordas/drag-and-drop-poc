const cardService = require('./card.service.js');

const resolvers = {
  Query: {
    cards: () => {
      return cardService.getCards();
    },
  },
  Mutation: {
    updateCard: (_, { id }) => {
      return cardService.updateCard(id);
    }
  }
};

module.exports = resolvers;
