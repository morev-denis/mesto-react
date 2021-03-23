import React from "react";
import logo from "../images/header/__logo/header__logo.svg";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
  });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .initData()
      .then((data) => {
        const [initialCards, userInfo] = data;

        setCurrentUser(userInfo);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleUpdateUser({ name, about }) {
    api.setUserInfo({ name, about }).then((data) => {
      setCurrentUser({ name: data.name, about: about, avatar: data.avatar });
      closeAllPopups();
    });
  }

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header src={logo} />
          <Main
            onCardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            cards={cards}
            setCards={setCards}
          />
          <Footer />
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="avatar-update"
          title="Обновить аватар"
          buttonName="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              id="avatar-update-input-link"
              className="popup__input popup__input_field_link"
              type="url"
              placeholder="Ссылка на картинку"
              name="avatar"
              required
            />
            <span className="avatar-update-input-link-error popup__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="card-add"
          title="Новое место"
          buttonName="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              id="card-add-input-name"
              className="popup__input popup__input_field_place"
              type="text"
              placeholder="Название"
              name="name"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="card-add-input-name-error popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input
              id="card-add-input-link"
              className="popup__input popup__input_field_link"
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              required
            />
            <span className="card-add-input-link-error popup__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="card-delete" title="Вы уверены?" buttonName="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
