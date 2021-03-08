function ImagePopup() {
  return (
    <div className="popup popup_feat_image-fullsize">
      <div className="popup__container popup__container_feat_image-fullsize">
        <img className="popup__image-fullsize" src="#" alt="Alt" />
        <button className="popup__button popup__button_action_close popup__button_position_image-fullsize-close" type="button"></button>
        <h2 className="popup__heading popup__heading_feat_image-fullsize">Название</h2>
      </div>
    </div>
  )
}

export default ImagePopup;