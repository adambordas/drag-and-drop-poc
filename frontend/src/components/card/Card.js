import './Card.css';

function Card() {
  const applyDragData = e => {
    e.dataTransfer.setData('card', e.target);
  };

  return (
    <div className="card" draggable onDragStart={applyDragData}>
      Todo item 1
    </div>
  );
}

export default Card;
