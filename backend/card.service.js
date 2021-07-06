const mockCards = [
  {
    id: '1',
    description: 'Todo item 1',
    lane: 'todo',
  },
  {
    id: '2',
    description: 'Todo item 2',
    lane: 'todo',
  },
  {
    id: '3',
    description: 'Todo item 3',
    lane: 'in-progress',
  },
  {
    id: '4',
    description: 'Todo item 4',
    lane: 'done',
  },
  {
    id: '5',
    description: 'Todo item 5',
    lane: 'done',
  },
  {
    id: '6',
    description: 'Todo item 6',
    lane: 'done',
  },
];

export const getCards = () => {
  return mockCards;
};

export const updateCard = (id, lane) => {
  const cardIndex = mockCards.findIndex(card => card.id === id);
  
  mockCards[cardIndex].lane = lane;

  return mockCards[cardIndex];
};
