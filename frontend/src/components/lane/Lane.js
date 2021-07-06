import './Lane.css';

import Card from '../card/Card'

function Lane({ title, cards }) {
  const allowDrop = e => {
    e.preventDefault();
  };

  const receiveCardDrop = e => {
    e.preventDefault();

    console.log(e.dataTransfer);
    console.log(e.dataTransfer.getData('card'));
  };
  
  return (
    <div className="lane-container">
      <h1>{title}</h1>
      <div className="lane" onDrop={receiveCardDrop} onDragOver={allowDrop}>
        {
          cards.map(card => <Card key={card.id} id={card.id} description={card.description} />)
        }
      </div>
    </div>
  );
}

export default Lane;
