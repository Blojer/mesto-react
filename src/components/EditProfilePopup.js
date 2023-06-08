import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description
    });
  };
  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'profile'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name || ''}
        onChange={handleChangeName}
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
        value={description || ''}
        onChange={handleChangeDescription}
      />
      <span className="popup__error" id="hobby-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
