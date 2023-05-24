import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from './utils/Api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState('');

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard('');
  };

  const handleCardClick = card => {
    setSelectedCard(card);
  };

  React.useEffect(() => {
    api
      .getUserData()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then(res => {
      setCards(res);
    });
  }, []);

  return (
    <div className="App">
      <div className="background">
        <div className="page">
          <Header />
          <Main
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            userName={userName}
            userDescription={userDescription}
            userAvatar={userAvatar}
            cards={cards}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            title={'Редактировать профиль'}
            name={'profile'}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="text"
              className="popup__input popup__input_type_name"
              name="name"
              id="name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__error" id="name-error"></span>
            <input
              type="text"
              className="popup__input popup__input_type_hobby"
              name="about"
              id="hobby"
              placeholder="О себе"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__error" id="hobby-error"></span>
          </PopupWithForm>
          <PopupWithForm
            title={'Новое место'}
            name={'place'}
            buttonText={'Создать'}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="text"
              className="popup__input popup__input_type_name-place"
              name="name"
              id="name-place"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="popup__error" id="name-place-error"></span>
            <input
              type="url"
              className="popup__input popup__input_type_link-place"
              name="link"
              id="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error" id="link-error"></span>
          </PopupWithForm>
          <PopupWithForm
            title={'Обновить аватар'}
            name={'avatar'}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="url"
              className="popup__input popup__input_type_link-avatar"
              name="avatar"
              id="link-avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error" id="link-avatar-error"></span>
          </PopupWithForm>
          <PopupWithForm title={'Вы уверены ?'} name={'delete'} buttonText={'Да'}></PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </div>
  );
}

export default App;
