function Main(props) {
  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__avatar">
          <img className="profile__avatar-img" src="#" alt="Аватар" />
          <button onClick={props.onEditAvatar} className="profile__button profile__button_action_edit-avatar"></button>
        </div>
        <h1 className="profile__name">Жак-Ив Кусто</h1>
        <button onClick={props.onEditProfile} className="profile__button profile__button_action_edit" type="button"></button>
        <p className="profile__job">Исследователь океана</p>
        <button onClick={props.onAddPlace} className="profile__button profile__button_action_add" type="button"></button>
      </section>

      <section className="elements page__elements">
        <ul className="elements__grid">
        </ul>
      </section>
    </main>
  );
}

export default Main;