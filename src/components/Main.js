import React from 'react';
import api from '../utils/api.js';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.initData()
    .then((data) => {
      const [initialCards, userInfo] = data;

      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
      setCards(initialCards);
      // ownerId = userInfo._id;
    })
    .catch((err) => {
      console.log(err);
    });
  });

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__avatar">
          <img className="profile__avatar-img" src={userAvatar} alt="Аватар" />
          <button onClick={props.onEditAvatar} className="profile__button profile__button_action_edit-avatar"></button>
        </div>
        <h1 className="profile__name">{userName}</h1>
        <button onClick={props.onEditProfile} className="profile__button profile__button_action_edit" type="button"></button>
        <p className="profile__job">{userDescription}</p>
        <button onClick={props.onAddPlace} className="profile__button profile__button_action_add" type="button"></button>
      </section>

      <section className="elements page__elements">
        <ul className="elements__grid">
          {cards.map((card) => (
            <li className="element" key={card._id}>
              <figure className="element__figure">
                <img className="element__image" src={card.link} alt={card.name} />
                <figcaption className="element__caption">
                  <h2 className="element__heading">{card.name}</h2>
                  <div className="element__like-container">
                    <button className="element__like" type="button"></button>
                    <div className="element__like-number">{card.likes.length}</div>
                  </div>
                </figcaption>
              </figure>
              <button className="element__delete" type="button"></button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;