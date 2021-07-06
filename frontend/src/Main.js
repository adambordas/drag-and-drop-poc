import './Main.css';
import Lane from './components/lane/Lane'
import { useEffect, useState } from 'react';
import { loadCards } from './lib/cardService';

function Main() {
  const [cards, setCards] = useState([]);

  const updateCards = () => {
    setCards(loadCards());
  };

  useEffect(() => {
    updateCards();
  }, []);

  return (
    <div className="container">
      <Lane
        name="todo"
        cards={cards.filter(card => card.lane === 'todo')}
        refreshCallback={updateCards}
      />
      <Lane
        name="in-progress"
        cards={cards.filter(card => card.lane === 'in-progress')}
        refreshCallback={updateCards}
      />
      <Lane
        name="done"
        cards={cards.filter(card => card.lane === 'done')}
        refreshCallback={updateCards}
      />
    </div>
  );
}

export default Main;
