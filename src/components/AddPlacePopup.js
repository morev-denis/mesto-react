import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeCardName(e) {
    setName(e.target.value);
  }

  function handleChangeCardLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: name,
      link: link,
    });
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="card-add"
      title="Новое место"
      buttonName="Создать"
      buttonLoadingName="Сохранение..."
      isLoading={props.isLoading}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          onChange={handleChangeCardName}
          value={name}
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
          onChange={handleChangeCardLink}
          value={link}
        />
        <span className="card-add-input-link-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
