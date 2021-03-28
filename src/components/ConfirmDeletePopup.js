import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.onConfirmDelete();
  }

  return (
    <PopupWithForm
      name="card-delete"
      title="Вы уверены?"
      buttonName="Да"
      buttonLoadingName="Удаление..."
      isLoading={props.isLoading}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmDeletePopup;
