function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_feat_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <form
        className={`popup__container popup__container_form popup__container_feat_${props.name}`}
        name={`form-${props.name}`}
        noValidate
        onSubmit={props.onSubmit}
      >
        <button
          onClick={props.onClose}
          className={`popup__button popup__button_action_close popup__button_position_${props.name}-close`}
          type="button"
        />
        <h2 className={`popup__heading popup__heading_feat_profile-edit`}>
          {props.title}
        </h2>
        {props.children}
        <button
          className={`popup__button popup__button_action_submit`}
          type="submit"
        >
          {props.isLoading ? props.buttonLoadingName : props.buttonName}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
