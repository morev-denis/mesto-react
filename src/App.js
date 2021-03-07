import logo from './images/header/__logo/header__logo.svg';
// import './App.css';

function App() {
  return (
    <div className="root">
      <div className="page">

        <header className="header page__header">
          <a className="header__link" href="./index.html" target="_self">
            <img className="header__logo" src={logo} alt="Логотип Mesto Russia" />
          </a>
        </header>

        <main className="content">
          <section className="profile page__profile">
            <div className="profile__avatar">
              <img className="profile__avatar-img" src="#" alt="Аватар" />
              <button className="profile__button profile__button_action_edit-avatar"></button>
            </div>
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button profile__button_action_edit" type="button"></button>
            <p className="profile__job">Исследователь океана</p>
            <button className="profile__button profile__button_action_add" type="button"></button>
          </section>

          <section className="elements page__elements">
            <ul className="elements__grid">
            </ul>
          </section>
        </main>

        <footer className="footer page__footer">
          <p className="footer__copyright">© 2020 Морев Денис</p>
        </footer>

      </div>

      <div className="popup popup_feat_profile-edit">
        <form className="popup__container popup__container_form popup__container_feat_profile-edit" name="form-profile-edit" noValidate>
          <button className="popup__button popup__button_action_close popup__button_position_profile-edit-close" type="button"></button>
          <h2 className="popup__heading popup__heading_feat_profile-edit">Редактировать профиль</h2>
          <label className="popup__field">
            <input id="profile-edit-input-name" className="popup__input popup__input_field_name" type="text" placeholder="Имя" name="profileName" required minLength="2" maxLength="40" />
            <span className="profile-edit-input-name-error popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input id="profile-edit-input-job" className="popup__input popup__input_field_job" type="text" placeholder="О себе" name="profileJob" required minLength="2" maxLength="200" />
            <span className="profile-edit-input-job-error popup__input-error"></span>
          </label>
          <button className="popup__button popup__button_action_submit" type="submit">Сохранить</button>
        </form>
      </div>

      <div className="popup popup_feat_avatar-update">
        <form className="popup__container popup__container_form popup__container_feat_avatar-update" name="form-avatar-update" noValidate>
          <button className="popup__button popup__button_action_close popup__button_position_avatar-update-close" type="button"></button>
          <h2 className="popup__heading popup__heading_feat_avatar-update">Обновить аватар</h2>
          <label className="popup__field">
            <input id="avatar-update-input-link" className="popup__input popup__input_field_link" type="url" placeholder="Ссылка на картинку" name="avatar" required />
            <span className="avatar-update-input-link-error popup__input-error"></span>
          </label>
          <button className="popup__button popup__button_action_submit" type="submit">Сохранить</button>
        </form>
      </div>

      <div className="popup popup_feat_card-add">
        <form className="popup__container popup__container_form popup__container_feat_card-add" name="form-add-card" noValidate>
          <button className="popup__button popup__button_action_close popup__button_position_card-add-close" type="button"></button>
          <h2 className="popup__heading popup__heading_feat_card-add">Новое место</h2>
          <label className="popup__field">
            <input id="card-add-input-name" className="popup__input popup__input_field_place" type="text" placeholder="Название" name="name" required minLength="2" maxLength="30" />
            <span className="card-add-input-name-error popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input id="card-add-input-link" className="popup__input popup__input_field_link" type="url" placeholder="Ссылка на картинку" name="link" required />
            <span className="card-add-input-link-error popup__input-error"></span>
          </label>
          <button className="popup__button popup__button_action_submit" type="submit">Создать</button>
        </form>
      </div>

      <div className="popup popup_feat_card-delete">
        <form className="popup__container popup__container_form popup__container_feat_card-delete" name="form-delete-card" noValidate>
          <button className="popup__button popup__button_action_close popup__button_position_card-delete-close" type="button"></button>
          <h2 className="popup__heading popup__heading_feat_card-delete">Вы уверены?</h2>
          <button className="popup__button popup__button_action_submit" type="button">Да</button>
        </form>
      </div>

      <div className="popup popup_feat_image-fullsize">
        <div className="popup__container popup__container_feat_image-fullsize">
          <img className="popup__image-fullsize" src="#" alt="Alt" />
          <button className="popup__button popup__button_action_close popup__button_position_image-fullsize-close" type="button"></button>
          <h2 className="popup__heading popup__heading_feat_image-fullsize">Название</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
