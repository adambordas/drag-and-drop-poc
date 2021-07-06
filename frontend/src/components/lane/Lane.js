import './Lane.css';

import Card from '../card/Card'

function Lane() {
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
      <h1>Todo</h1>
      <div className="lane" onDrop={receiveCardDrop} onDragOver={allowDrop}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Lane;
