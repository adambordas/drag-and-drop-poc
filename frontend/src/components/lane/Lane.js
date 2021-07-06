import './Lane.css';
import Card from '../card/Card'
import { moveCard } from '../../lib/cardService';

function Lane({ name, cards, refreshCallback }) {
  const allowDrop = e => {
    e.preventDefault();
  };

  const receiveCardDrop = e => {
    e.preventDefault();

    const cardId = e.dataTransfer.getData('cardId');

    moveCard(cardId, name);

    refreshCallback();
  };
  
  return (
    <div className="lane-container">
      <h1>{name}</h1>
      <div className="lane" onDrop={receiveCardDrop} onDragOver={allowDrop}>
        {
          cards.map(card => <Card key={card.id} id={card.id} description={card.description} />)
        }
      </div>
    </div>
  );
}

export default Lane;
