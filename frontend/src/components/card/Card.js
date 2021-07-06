import './Card.css';

function Card({ id, description }) {
  const applyDragData = e => {
    e.dataTransfer.setData('cardId', id);
  };

  return (
    <div className="card" draggable onDragStart={applyDragData}>
      {description}
    </div>
  );
}

export default Card;
