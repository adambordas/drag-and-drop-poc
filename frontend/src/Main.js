import './Main.css';
import Lane from './components/lane/Lane'
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CARDS } from './lib/queries';

function Main() {
  const [cards, setCards] = useState([]);

  const { data } = useQuery(GET_CARDS, { fetchPolicy: 'network-only' });

  useEffect(() => {
    if (data) {
      setCards(data.cards);
    }
  }, [data]);

  return (
    <div className="container">
      <Lane
        name="todo"
        cards={cards.filter(card => card.lane === 'todo')}
      />
      <Lane
        name="in-progress"
        cards={cards.filter(card => card.lane === 'in-progress')}
      />
      <Lane
        name="done"
        cards={cards.filter(card => card.lane === 'done')}
      />
    </div>
  );
}

export default Main;
