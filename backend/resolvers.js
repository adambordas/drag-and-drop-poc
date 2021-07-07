import * as cardService from './card.service.js';

const resolvers = {
  Query: {
    cards: async () => {
      return await cardService.getCards();
    },
  },
  Mutation: {
    updateCard: async (_, { id, lane }) => {
      return await cardService.updateCard(id, lane);
    }
  }
};

export default resolvers;
