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

export const getCards = () => {
  return mockCards;
};

export const updateCard = id => {
  return mockCards.find(card => card.id === id);
};
