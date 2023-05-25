function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <li className="place" key={card._id}>
        <img src={card.link} alt={card.name} className="place__image" onClick={handleClick} />
        <div className="place__block">
          <h2 className="place__title">{card.name}</h2>
          <div className="place__like">
            <button className="place__button-like" type="button"></button>
            <h3 className="place__likes-count">{card.likes.length}</h3>
          </div>
        </div>
        <button className="place__delete" onClick={onDeleteCard}></button>
      </li>
    </>
  );
}

export default Card;
