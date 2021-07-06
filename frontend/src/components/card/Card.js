import './Card.css';

function Card({ id, description }) {
  const applyDragData = e => {
    e.dataTransfer.setData('card', e.target);
  };

  return (
    <div className="card" draggable onDragStart={applyDragData}>
      {description}
    </div>
  );
}

export default Card;
