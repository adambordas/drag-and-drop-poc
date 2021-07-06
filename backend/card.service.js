const mockCards = [
  {
    id: '1',
    description: 'Todo item 1',
  },
  {
    id: '2',
    description: 'Todo item 2',
  },
];

const getCards = () => {
  return mockCards;
};

const updateCard = id => {
  return mockCards.find(card => card.id === id);
};

module.exports = {
  getCards,
  updateCard
};
