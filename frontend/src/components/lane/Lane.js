import './Lane.css';
import Card from '../card/Card'
import { useMutation } from '@apollo/client';
import { MOVE_CARD } from '../../lib/queries';

function Lane({ name, cards }) {
  const [moveCard] = useMutation(MOVE_CARD);

  const allowDrop = e => {
    e.preventDefault();
  };

  const receiveCardDrop = async e => {
    e.preventDefault();

    const cardId = e.dataTransfer.getData('cardId');

    await moveCard({
      variables: {
        id: cardId,
        lane: name
      }
    });
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
