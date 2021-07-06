import * as cardService from './card.service.js';

const resolvers = {
  Query: {
    cards: () => {
      return cardService.getCards();
    },
  },
  Mutation: {
    updateCard: (_, { id, lane }) => {
      return cardService.updateCard(id, lane);
    }
  }
};

export default resolvers;
