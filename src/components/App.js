import React from 'react';
import logo from '../images/header/__logo/header__logo.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="root">
      <div className="page">
        <Header src={logo} />
        <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} />
        <Footer />
      </div>

      <PopupWithForm name="profile-edit" title="Редактировать профиль" buttonName="Сохранить" isOpen={isEditProfilePopupOpen}>
        <label className="popup__field">
          <input id="profile-edit-input-name" className="popup__input popup__input_field_name" type="text" placeholder="Имя" name="profileName" required minLength="2" maxLength="40" />
          <span className="profile-edit-input-name-error popup__input-error"></span>
        </label>
        <label className="popup__field">
          <input id="profile-edit-input-job" className="popup__input popup__input_field_job" type="text" placeholder="О себе" name="profileJob" required minLength="2" maxLength="200" />
          <span className="profile-edit-input-job-error popup__input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="avatar-update" title="Обновить аватар" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen}>
        <label className="popup__field">
          <input id="avatar-update-input-link" className="popup__input popup__input_field_link" type="url" placeholder="Ссылка на картинку" name="avatar" required />
          <span className="avatar-update-input-link-error popup__input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="card-add" title="Новое место" buttonName="Создать" isOpen={isAddPlacePopupOpen}>
        <label className="popup__field">
          <input id="card-add-input-name" className="popup__input popup__input_field_place" type="text" placeholder="Название" name="name" required minLength="2" maxLength="30" />
          <span className="card-add-input-name-error popup__input-error"></span>
        </label>
        <label className="popup__field">
          <input id="card-add-input-link" className="popup__input popup__input_field_link" type="url" placeholder="Ссылка на картинку" name="link" required />
          <span className="card-add-input-link-error popup__input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="card-delete" title="Вы уверены?" buttonName="Да" />

      <ImagePopup />
    </div>
  );
}

export default App;
