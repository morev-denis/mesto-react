import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__avatar">
          <img
            className="profile__avatar-img"
            src={currentUser.avatar}
            alt="Аватар"
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__button profile__button_action_edit-avatar"
          />
        </div>
        <h1 className="profile__name">{currentUser.name}</h1>
        <button
          onClick={props.onEditProfile}
          className="profile__button profile__button_action_edit"
          type="button"
        />
        <p className="profile__job">{currentUser.about}</p>
        <button
          onClick={props.onAddPlace}
          className="profile__button profile__button_action_add"
          type="button"
        />
      </section>

      <section className="elements page__elements">
        <ul className="elements__grid">
          {props.cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
