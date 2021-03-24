import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="avatar-update"
      title="Обновить аватар"
      buttonName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
  );
}

export default EditAvatarPopup;
