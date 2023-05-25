import Card from './Card';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  userName,
  userDescription,
  userAvatar,
  cards,
  onCardClick,
  onDeleteCard
}) {
  return (
    <main>
      <section className="profile">
        <div className="profile__edit">
          <img src={userAvatar} alt="Фото профиля" className="profile__avatar" />
          <button className="profile__avatar-button" type="button" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__data">
            <h1 className="profile__full-name">{userName}</h1>
            <p className="profile__hobby">{userDescription}</p>
          </div>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-ellement"
          type="button"
          aria-label="Добавить карточку"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="places">
        <ul className="places__list">
          {cards.map(card => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onDeleteCard={onDeleteCard}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
