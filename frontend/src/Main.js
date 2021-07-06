import './Main.css';
import Lane from './components/lane/Lane'
import { useEffect, useState } from 'react';

function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
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

    setCards(mockCards);
  }, []);

  return (
    <div className="container">
      <Lane title="todo" cards={cards.filter(card => card.lane === 'todo')} />
      <Lane title="in-progress" cards={cards.filter(card => card.lane === 'in-progress')} />
      <Lane title="done" cards={cards.filter(card => card.lane === 'done')} />
    </div>
  );
}

export default Main;
