function PopupWithForm({ name, title, children, buttonText, isOpen, onClose, onSubmit }) {
  return (
    <>
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container popup__container_type_form">
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" name={`popup-${name}`} onSubmit={onSubmit} noValidate>
            {children}
            <button type="submit" className="popup__save" name="popup-save-card">
              {buttonText || 'Сохранить'}
            </button>
          </form>
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
