import * as cardService from './card.service.js';

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

export default resolvers;
