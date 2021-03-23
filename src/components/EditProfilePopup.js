import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      buttonName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__field">
        <input
          id="profile-edit-input-name"
          className="popup__input popup__input_field_name"
          type="text"
          placeholder="Имя"
          name="profileName"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="profile-edit-input-name-error popup__input-error"></span>
      </label>
      <label className="popup__field">
        <input
          id="profile-edit-input-job"
          className="popup__input popup__input_field_job"
          type="text"
          placeholder="О себе"
          name="profileJob"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="profile-edit-input-job-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
