import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  React.useEffect(() => {
    inputRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="avatar-update"
      title="Обновить аватар"
      buttonName="Сохранить"
      isLoading={props.isLoading}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          id="avatar-update-input-link"
          className="popup__input popup__input_field_link"
          type="url"
          placeholder="Ссылка на картинку"
          name="avatar"
          required
          ref={inputRef}
        />
        <span className="avatar-update-input-link-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
