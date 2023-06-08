import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeLink = e => {
    setLink(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });
  };

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'place'}
      buttonText={'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className="popup__error" id="name-place-error"></span>
      <input
        type="url"
        className="popup__input popup__input_type_link-place"
        name="link"
        id="link"
        placeholder="Ссылка на картинку"
        required
        value={link || ''}
        onChange={handleChangeLink}
      />
      <span className="popup__error" id="link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
